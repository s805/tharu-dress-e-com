import React, { Component } from "react";
import PropTypes from "prop-types";
import TailorTab from "./TailorTab";
// ...

class TailorTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tailor-tabs row">
        <ul className="tailor-tab-list col-lg-6 col-md-6 col-sm-12">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <TailorTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tailor-tab-content col-lg-6 col-md-6 col-sm-12">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default TailorTabs;
