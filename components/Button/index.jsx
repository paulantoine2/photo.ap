import './_button.scss';
import classnames from 'classnames';

export default function Button (props) {
  return <button id={props.id}
                 className={classnames('Button', props.className, props.type ? 'Button--' + props.type : '')}
                 onClick={props.onClick}>
    {props.children}
  </button>
}