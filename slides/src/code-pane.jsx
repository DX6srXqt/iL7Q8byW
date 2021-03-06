import React from "react/addons";
import highlight from "highlight.js";
import Base from "./base";
import Radium from "radium";
import isUndefined from "lodash/lang/isundefined";

@Radium
class CodePane extends Base {
  createMarkup() {
    const { source, children } = this.props;
    // Allow code to come from source or from children, for markdown support
    const code = (isUndefined(source) || source === "") ? children : source;
    const markup = highlight.highlight(this.props.lang, code);
    return {
      __html: markup.value
    };
  }
  render() {
    return (
      <pre style={[this.context.styles.components.codePane.pre, this.getStyles(), this.props.style]}>
        <code
          className="hljs"
          style={this.context.styles.components.codePane.code}
          dangerouslySetInnerHTML={this.createMarkup()}/>
      </pre>
    );
  }
}

CodePane.contextTypes = {
  styles: React.PropTypes.object
};

CodePane.propTypes = {
  lang: React.PropTypes.string,
  source: React.PropTypes.string,
  style: React.PropTypes.object
};

CodePane.defaultProps = {
  lang: "html",
  source: ""
};

export default CodePane;
