import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
   
    fetch(`${host}/manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = 'rb3-container-mainscript';
        script.type = 'text/javascript';
        script.src = `${host}/main.9c6fc9d0dd42d2043d61.chunk.js`;
        const script2 = document.createElement('script');
        script2.id = 'rb3-container-rtscript';
        script2.type = 'text/javascript';
        script2.src = `${host}/runtime.da318da521f33b8c8669.js`;
        const script3 = document.createElement('script');
        script3.id = 'rb3-container-rtscript3';
        script3.type = 'text/javascript';
        script3.src = `${host}/11.b3355011b52209532c26.chunk.js`;
        script3.onload = this.renderMicroFrontend;
        document.body.appendChild(script);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
      });
  }


  renderMicroFrontend = () => {
    window.renderrb3();
  };

  render() {
    return <div id = 'rb3-container' />
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;