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
            'Photography, made with love.',
            'Photography, made with passion.',
            'Photography, made with love.',
            'Photography, made with passion.',
            'Photography, made with love.',
          ]} />
          </h1>
          <h2>Brand content / Portrait</h2>
          <p>Creating creative digital content for companies, individuals, non profits and everyone who wants their story to be told in a unique, emotional and magical way.</p>
        </section>
      </div>
    );
  }
}