/* !!! Если не указано иное, отсчет относительного пути ведется от папки с этим файлом (`./webpack`) !!! */

/******************************* JS **************************************/
// Входные точки JS (относительно `./package.json`)
const entryPoint = {
    app: "./src/js/app.js"
};

// Путь к публичной части (здесь будут создаваться результирующие бандлы)
const jsOutputPath = "../dist";

// Шаблон для сохранения JS бандлов. Каждый [name] - 1 entryPoint. (относительно `jsOutputPath`)
const jsOutputTpl = "js/[name].js";

// Настройка ProvidePlugin
// Здесь можно указать все пакеты, которые будут использоваться повсеместно (чтобы не делать их `import` в каждом файле)
const providePlugin = {
    "$": "jquery",
    "jQuery": "jquery"
};


/******************************** CSS *************************************/
// Шаблон для сохранения CSS бандлов (относительно `jsOutputPath`)
const cssOutputTpl = "css/[name].css";
const cssOutputTplExtra = "css/[id].css";


/******************************** FILES *************************************/
// Имя папки с изображениями
const imagesFolder = "images";

// Куда будут копироваться файлы изображений встречающиеся в url() sass файлов (относительно `jsOutputPath`)
const fileLoaderOutputPath = "./" + imagesFolder;

// Путь к скопированным файлам изображений для создания новых url() в генерирующихся css (относительно `jsOutputPath/cssOutputTpl`)
const fileLoaderPublicPath = "../" + imagesFolder;

// Имя папки с изображениями
const fontsFolder = "fonts";

// Куда будут копироваться файлы шрифтов встречающиеся в url() sass файлов (относительно `jsOutputPath`)
const fontsLoaderOutputPath = "./" + fontsFolder;

// Путь к скопированным файлам шрифтов для создания новых url() в генерирующихся css (относительно `jsOutputPath/cssOutputTpl`)
const fontsLoaderPublicPath = "../" + fontsFolder;

// Шаблон имени копирумого файла
const fileLoaderNameTpl = "[name].[ext]";


/******************************** SPRITE *************************************/
// Путь к папке с изображениями для спрайта
const spriteImagesPath = "../src/images/icons";

// Файл в котором будет создан спрайт
const spriteGenPng = "../src/images/sprite.png";

// Файл в котором будут сгенерированы все переменные и миксины для спрайта
const spriteGenScss = "../src/sass/mixins/sprite.scss";


/******************************** SVG SPRITE *************************************/
// Путь к папке с svg для спрайта
const svgSourceFolder = "../src/svg";

// Путь к svg-спрайту относительно jsOutputPath
const svgOutputFile = "./svg/sprite.svg";

/*
В этой сборке мы не используем миксин из sprite-svg.scss.
Чтобы использовать SVG-спрайт необходимо сам файл спрайта (svgOutputFile) подключить в футере сайта.
Затем, в нужных местах, обращаться к нужному изображению конструкцией вида
<svg><use xlink:href="#svg-instagram"></use></svg> (в href указвываем #, затем префикс из настроек SVGSpritemapPlugin, затем название исходного файла SVG)
Чтобы иконка была зависима от цвета родителя необходимо, чтобы в path исходного файла присутствовал атрибут fill="currentColor"
 */


module.exports = {
    entryPoint,
    jsOutputPath,
    jsOutputTpl,
    providePlugin,
    cssOutputTpl,
    cssOutputTplExtra,
    fileLoaderNameTpl,
    fileLoaderOutputPath,
    fileLoaderPublicPath,
    fontsLoaderOutputPath,
    fontsLoaderPublicPath,
    spriteImagesPath,
    spriteGenPng,
    spriteGenScss,
    svgSourceFolder,
    svgOutputFile
};
