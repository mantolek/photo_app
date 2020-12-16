import React from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getTranslatedText } from '../../../store/languages/Translations_function';
import { change_one } from '../../../actions/change_one';
import { connect } from 'react-redux';

// interface IElementsToAdd {
//   ch: {
//     name: string;
//     elements: {
//       pics: {
//         src: string;
//         alt: string;
//       }[];
//       id: string;
//     }[];
//   }[];
//   change_one: Function;
// }

// interface IElementsToAddState {
//   image: {
//     folderOpen: string;
//   }
// }

// const ElementsToAdd: React.FC<IElementsToAdd> = (props) => {
//   const image = useSelector((state: IElementsToAddState) => state.image);
//   const dispatch = useDispatch();
 
const ElementsToAdd = (props) => {  
  const image = useSelector(state => state.image);
  const dispatch = useDispatch();

  return (
    <div>
      {props.ch &&
        props.ch.map(x => {
          return (
            <div className='push-right' key={x.name}>
              <p
                onClick={e =>
                  dispatch({
                    type: 'IMAGE_CHANGE_ONE',
                    payload: {
                      loadName: 'folderOpen',
                      loadValue: x.name,
                    },
                  })
                }
              >
                {getTranslatedText(x.name)}
              </p>
              {/* OPEN PHOTOS */}
              {x.elements.map((el,i) => {
                return (
                  <div key={i}>
                    {el.pics.length !== 0 ? (
                      <div
                        key={i+100}
                        className={`${
                          el.id === image.folderOpen ? 'active' : 'close'
                        }`}
                      >
                        {el.pics.map(x => (
                          <div
                            className='wrapper'
                            onClick={e => {
                              props.change_one([
                                {
                                  loadName: 'element',
                                  loadValue: x.src,
                                },
                                {
                                  loadName: 'global',
                                  loadValue: true,
                                },
                              ]);
                            }}
                            key={x.src}
                          >
                            <img src={x.src} alt={x.alt} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={`empty-folder ${
                          el.id === image.folderOpen ? 'active' : 'close'
                        }`}
                      >
                        {getTranslatedText('Empty')}
                      </div>
                    )}{' '}
                  </div>
                );
              })}
            </div>
          );
        })}
      {/* If nested */}
      {props.ch.children && <ElementsToAdd elms={props.ch.children} />}
    </div>
  );
}

export default connect(null, { change_one })(ElementsToAdd);
