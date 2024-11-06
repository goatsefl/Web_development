import { franc } from 'franc'
import langs from 'langs'
import colors from 'colors'

function main() {
    if (typeof process.argv[2] !== 'string') {
        console.log("Please provide a string value using quotations.")
        return;
    }

    const language = franc(process.argv[2]);

    if (language === 'und') {
        console.log("Unknown and undetermined language");
    }
    else {
        const actualLanguage = langs.where("3", language);
        if (actualLanguage) {
            console.log(colors.green(actualLanguage.name));
        }
        else {
            console.log(colors.red(language));
        }
    }
}
main();