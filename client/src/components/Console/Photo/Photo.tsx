import React, { useEffect } from 'react';
// Redux
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import {
  getPhotos,
  savePhoto,
  getMyPhotos,
  overwritePhoto,
} from '../../../actions/photo';
// Screen shot
import html2canvas from 'html2canvas';
// Actions
import { popup, confirm } from '../../../popup/Popup';
import { change_one } from '../../../actions/change_one';
// Styles
import { CONTAINER, SEARCHBTN } from './styles';
// Translations
import { getTranslatedText } from '../../../store/languages/Translations_function';
// Interfaces
import { IPhoto, IPhotoState } from '../../../types/photoInterfaces';

const Photo: React.FC<IPhoto> = props => {
  const generalState = useSelector((state: IPhotoState) => state.general_state);
  const photo = useSelector((state: IPhotoState) => state.photo);

  useEffect(() => {
    props.getPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const takePhoto = () => {
    // Clear any popups from the screen
    props.change_one([
      {
        loadName: 'infomove',
        loadValue: false,
      },
      {
        loadName: 'infonotmove',
        loadValue: false,
      },
      {
        loadName: 'id',
        loadValue: null,
      },
    ]);
    // https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
    setTimeout(() => {
      html2canvas(document.querySelector('#photo')).then(function(canvas) {
        var copied = canvas
          .toDataURL('image/jpeg')
          .replace('image/jpeg', 'image/octet-stream');

        let parent = document.createElement('div');
        parent.classList.add('parent-photo-class');
        // Close button
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerHTML = getTranslatedText('Close');
        btn.addEventListener('click', function(e) {
          this.parentElement.parentElement.remove();
          confirm(getTranslatedText('Photo_cancelled'));
        });
        // Download button
        let dbtn = document.createElement('a');
        dbtn.classList.add('btn');
        dbtn.innerHTML = getTranslatedText('Download');
        dbtn.addEventListener('click', async function() {
          this.href = copied;
          this.download = 'Image.png';
          this.parentElement.parentElement.remove();
          confirm('Photo downloaded!');
        });
        // Save button
        let sbtn = document.createElement('button');
        sbtn.classList.add('btn');
        sbtn.innerHTML = getTranslatedText('Save');
        sbtn.addEventListener('click', async function() {
          if (generalState.photo_current_id) {
            let result = await popup(
              getTranslatedText('Do_you_want_to_overwrite_this_photo')
            );
            if (result) {
              props.overwritePhoto({
                id: generalState.photo_current_id,
                src: copied,
              });
              this.parentElement.parentElement.remove();
              confirm(getTranslatedText('Photo_overwritten'));
            } else {
              // props.savePhoto({ src: copied });
            }
          } else {
            props.savePhoto({ src: copied });
            this.parentElement.parentElement.remove();
            confirm(getTranslatedText('Photo_saved'));
          }
        });
        // Container for btns
        let cont = document.createElement('div');
        cont.classList.add('cont-btns');
        cont.appendChild(btn);
        cont.appendChild(dbtn);
        cont.appendChild(sbtn);

        // Container for photo
        let photo = document.createElement('img');
        photo.src = copied;
        photo.classList.add('photo-class');

        // Connect elemenets
        parent.appendChild(photo);
        parent.appendChild(cont);
        document.querySelector('.mega_container').appendChild(parent);
      });
    }, 0);
  };

  return (
    <>
      <SEARCHBTN
        className="btn"
        onClick={() => {
          takePhoto();
        }}
      >
        {getTranslatedText('Photo')}
      </SEARCHBTN>

      <select
        onChange={e => {
          if (e.target.value === 'mine') {
            props.getMyPhotos();
          } else {
            props.getPhotos();
          }
        }}
        value={photo.option}
      >
        <option value="all">{getTranslatedText('Get_all_photos')}</option>
        <option value="mine">{getTranslatedText('Get_my_photos')}</option>
      </select>
      <div className="general-wrapper">
        <CONTAINER>
          {photo.photos &&
            photo.photos.map(i => {
              return (
                <div
                  onClick={() => {
                    props.change_one([
                      {
                        loadName: 'list',
                        loadValue: i.download_list,
                      },
                      {
                        loadName: 'photo_current_id',
                        loadValue: i._id,
                      },
                    ]);
                  }}
                  className="finished-imgages"
                  key={i.src}
                  style={{ background: `url(${i.src})` }}
                ></div>
              );
            })}
        </CONTAINER>
      </div>
    </>
  );
};

export default connect(null, {
  getPhotos,
  savePhoto,
  getMyPhotos,
  overwritePhoto,
  change_one,
})(Photo);
