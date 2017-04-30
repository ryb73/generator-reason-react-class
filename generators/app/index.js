"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    prompting() {
        const prompts = [{
            type: "input",
            name: "className",
            message: "Enter a name for the class:"
        }];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("class.re"),
            this.destinationPath(`${this.props.className}.re`),
            this.props
        );
    }
};
