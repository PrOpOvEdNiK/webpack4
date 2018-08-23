/* !!! Если не указано иное, отсчет относительного пути ведется от папки с этим файлом (`./webpack`) !!! */

/******************************* JS **************************************/
// Входные точки JS (относительно `./package.json`)
const entryPoint = {
    app: "./src/js/app.js"
};

// Путь к публичной части (здесь будут создаваться результирующие бандлы)
const jsOutputPath = "../dist";

// Шаблон для сохранения JS бандлов. Каждый [name] - 1 entryPoint. (относительно `outputPath`)
const jsOutputTpl = "js/[name].js";

// Настройка ProvidePlugin
// Здесь можно указать все пакеты, которые будут использоваться повсеместно (чтобы не делать их `import` в каждом файле)
const providePlugin = {
    "$": "jquery",
    "jQuery": "jquery"
};


/******************************** SASS *************************************/
// Шаблон для сохранения CSS бандлов (относительно `outputPath`)
const cssOutputTpl = "css/[name].css";
const cssOutputTplExtra = "css/[id].css";

// Куда будут копироваться файлы изображений встречающиеся в url() sass файлов
const fileLoaderOutputPath = "../dist/images";

// Путь к скопированным файлам изображений для создания новых url() в генерирующихся css (относительно `fileLoaderOutputPath`)
const fileLoaderPublicPath = "../images";

// Куда будут копироваться файлы шрифтов встречающиеся в url() sass файлов
const fontsLoaderOutputPath = "../dist/fonts";

// Путь к скопированным файлам шрифтов для создания новых url() в генерирующихся css (относительно `fileLoaderOutputPath`)
const fontsLoaderPublicPath = "../fonts";



// Шаблон имени копирумого файла
const fileLoaderNameTpl = "[name].[ext]";


/******************************** SPRITE *************************************/
// Путь к папке с изображениями для спрайта
const spriteImagesPath = "../src/images/icons";

// Файл в котором будет создан спрайт
const spriteGenPng = "../src/images/sprite.png";

// Файл в котором будут сгенерированы все переменные и миксины для спрайта
const spriteGenScss = "../src/sass/mixins/sprite.scss";


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
    spriteGenScss
};
