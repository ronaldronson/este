import Component from '../components/component.react';
import React from 'react';

export default function fetch(getArgs) {

  return Base => class Fetch extends Component {

    static displayName = `${Base.displayName || Base.name}Fetch`;

    static propTypes = {
      actions: React.PropTypes.object.isRequired
    };

    componentWillMount() {
      this.dispatchFetchGet();
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    dispatchFetchGet() {
      if (!process.env.IS_BROWSER) return;
      const args = getArgs(this.props);
      this.props.actions.fetch.get(args.action, args.url);
    }

    render() {
      return <Base {...this.props} />;
    }

  };

}
