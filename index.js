import inquirer from "inquirer";
function count(text) {
    let textWithoutSpcae = text.replace(/\s/g, "");
    return textWithoutSpcae.length;
}
async function start() {
    let paragraph = await inquirer.prompt({
        type: "input",
        name: "text",
        message: "Please enter your paragraph!"
    });
    let result = count(paragraph.text);
    console.log(result);
}
start();
