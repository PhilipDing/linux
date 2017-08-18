const Crawler = require('crawler');
const toMarkdown = require('to-markdown');
const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');

const linuxCommand = [];
const commands = [];

const crawlCategory = () => {
    return new Promise((resolve, reject)=> {
        console.log('start crawl category.');

        const c = new Crawler({
            callback: function(error, res, done) {
                if (error) {
                    reject();
                } else {
                    const $ = res.$;
                    $('.c_box').each(function() {
                        const title = $(this).find('.hd h3').text();
                        const category = [];
                        $(this).find('.bd li').each(function() {
                            const $link = $(this).find('a');
                            category.push({
                                title: $link.text(),
                                link: $link.attr('href')
                            })
                        });

                        linuxCommand.push({
                            title,
                            category
                        })
                    });
                }

                done();

                resolve();
            }
        });

        c.queue('http://man.linuxde.net/');
    });
};

const crawlSubCategory = () => {
    return new Promise((resolve, reject) => {
        console.log('start crawl sub category.');

        const c = new Crawler({
            callback: function(error, res, done) {
                if (error) {
                    console.log('crawl sub category => error');
                    reject();
                } else {
                    console.log(`crawl sub category => ${decodeURI(res.request.uri.href)}`);

                    const $ = res.$;
                    const link = decodeURI(res.request.uri.href);
                    const category = [];
                    $('.item').each(function() {
                        const $this = $(this);
                        const cmd = {
                            title: $this.find('a').text(),
                            link: $this.find('a').attr('href'),
                            desc: $this.find('.des').text()
                        };
                        category.push(cmd);
                        commands.push(cmd);
                    });

                    for (let lc of linuxCommand) {
                        const cat = lc.category.find(c => c.link === link);
                        if (cat) {
                            cat.category = category;
                            break;
                        }
                    }
                }

                done();
            }
        });

        const links = linuxCommand.reduce((accumulator, currentValue) => {
            return accumulator.concat(currentValue.category);
        }, []).map(v => encodeURI(v.link));

        c.queue(links);

        c.on('drain', function() {
            let filename  = path.join(__dirname, 'command', 'category.js');
            let str = `export default ${JSON.stringify(linuxCommand)}`;
            str = str.replace(/http:\/\/man.linuxde.net\//gi, '');
            fs.writeFileSync(filename, str);
            console.log(`create category.js → OK!`);

            filename  = path.join(__dirname, 'command', 'command.js');
            fs.writeFileSync(filename, `export default ${JSON.stringify(commands)}`);
            console.log(`create command.js → OK!`);

            resolve();
        })
    })
};

const crawlCommand = () => {
    return new Promise((resolve, reject) => {
        console.log('start crawl command.');

        const c = new Crawler({
            callback: function(error, res, done) {
                if (error) {
                    console.log('crawl command => error');

                    reject();
                } else {
                    console.log(`crawl command => ${decodeURI(res.request.uri.href)}`);

                    const $ = res.$;
                    const title = res.request.path.substr(1);
                    const content = $('.post_bd.post').html();
                    let mdStr = toMarkdown(content);
                    mdStr = mdStr.replace(/<pre>/gi,'```\n')
                                 .replace(/<\/pre>/gi,'\n```')
                                 .replace(/<span.*?>/gi,'')
                                 .replace(/<\/span>/gi,'')
                                 .replace(/http:\/\/man.linuxde.net\//gi, 'https://philipding.github.io/linux-command/')

                    const filename  = path.join(__dirname, 'command', `${title}.md`);
                    fs.writeFileSync(filename, mdStr);
                    console.log(`create ${title} → OK!`);
                }

                done();
            }
        })

        const links = (commands || []).map(v => v.link);
        c.queue(links);
        c.on('drain', function() {
            console.log('end crawl command.');

            resolve();
        })
    });
}

crawlCategory()
    .then(() => crawlSubCategory())
    .then(() => crawlCommand())
    .catch(e => {
        console.log(e);
    });
