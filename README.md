## Webpack 4 Boilerplate project
#### ES6 + Sass

Сборка умеет интерпретировать ES6 в ES5 и делать единый бандл, собирать SCSS в CSS, генерировать спрайт и миксин для него.

##### Реккомендуем использовать Yarn

> В необходимой директории проекта сделать `$ git clone git@gitlab.web-axioma.ru:pd/webpack4.git`  
> Перейти в созданную папку, сделать `$ yarn install`  
> Все базовые настройки в файле `./webpack/config.js`

Предусмотренно 2 варианта работы:  

- `$ yarn run build` — соберет production версию  
- `$ yarn run watch` — запустит вотчер (dev сборка)

#### Чтобы включить изображение в спрайт нужно воспользоваться конструкцией  
`@include sprite($xxx);`, где `xxx` - имя файла в папке с изображениями для спрайта.  

#### Добавлена возможность создавать и использовать SVG-спрайт.  
Чтобы использовать SVG-спрайт необходимо сам файл спрайта (svgOutputFile) подключить в футере сайта.  
Затем, в нужных местах, обращаться к нужному изображению конструкцией вида  
`<svg><use xlink:href="#svg-instagram"></use></svg>`  
(в href указвываем #, затем префикс из настроек SVGSpritemapPlugin, затем название исходного файла SVG)  
Чтобы иконка была зависима от цвета родителя необходимо, чтобы в path исходного файла присутствовал атрибут fill="currentColor"  
