import './global.scss';
import TypedTitle from './TypedTitle';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src='/logo.svg' alt="logo"/>
        </header>
        <section>
          <h1>
          <TypedTitle strings={[
            'Web development, made with love.',
            'Web development, made with passion.',
            'Web development, made with love.',
            'Web development, made with passion.',
            'Web development, made with love.',
          ]} />
          </h1>
          <h2>Front end / Javascript / Motion design integration</h2>
          <p>Website opening soon !</p>
        </section>
      </div>
    );
  }
}