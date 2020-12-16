import { images } from './images_src';
import { IImages } from '../../types/reducerInterfaces/reducerImagesInterfaces';

const initialState = {
  background: '',
  backgrounds: [
    {
      src: images.background[0].src,
      alt: images.background[0].alt,
    },
    {
      src: images.background[1].src,
      alt: images.background[1].alt,
    },
    {
      src: images.background[2].src,
      alt: images.background[2].alt,
    },
    {
      src: images.background[3].src,
      alt: images.background[3].alt,
    },
    {
      src: images.background[4].src,
      alt: images.background[4].alt,
    },
    {
      src: images.background[5].src,
      alt: images.background[5].alt,
    },
    {
      src: images.background[6].src,
      alt: images.background[6].alt,
    },
    {
      src: images.background[7].src,
      alt: images.background[7].alt,
    },
    {
      src: images.background[8].src,
      alt: images.background[8].alt,
    },
    {
      src: images.background[9].src,
      alt: images.background[9].alt,
    },
    {
      src: images.background[10].src,
      alt: images.background[10].alt,
    },
    {
      src: images.background[11].src,
      alt: images.background[11].alt,
    },
    {
      src: images.background[12].src,
      alt: images.background[12].alt,
    },
    {
      src: images.background[13].src,
      alt: images.background[13].alt,
    },
    {
      src: images.background[14].src,
      alt: images.background[14].alt,
    },

  ],
  openCloseFolders: false,
  folderOpen: '',
  folders: [
    {
      name: 'Elements',
      children: [
        {
          name: 'faces',
          elements: [
            {
              id: 'faces',
              pics: [
                {
                  src: images.faces[0].src,
                  alt: images.faces[0].alt,
                },
                {
                  src: images.faces[1].src,
                  alt: images.faces[1].alt,
                },
                {
                  src: images.faces[2].src,
                  alt: images.faces[2].alt,
                },
                {
                  src: images.faces[3].src,
                  alt: images.faces[3].alt,
                },
              ],
            },
          ],
        },
        {
          name: 'characters',
          elements: [
            {
              id: 'characters',
              pics: [
                {
                  src: images.characters[0].src,
                  alt: images.characters[0].alt,
                },
                {
                  src: images.characters[1].src,
                  alt: images.characters[1].alt,
                },
                {
                  src: images.characters[2].src,
                  alt: images.characters[2].alt,
                },
                {
                  src: images.characters[3].src,
                  alt: images.characters[3].alt,
                },
                {
                  src: images.characters[4].src,
                  alt: images.characters[4].alt,
                },
              ],
            },
          ],
        },
        {
          name: 'food',
          elements: [
            {
              id: 'food',
              pics: [
                {
                  src: images.food[0].src,
                  alt: images.food[0].alt,
                },
                {
                  src: images.food[1].src,
                  alt: images.food[1].alt,
                },
                {
                  src: images.food[2].src,
                  alt: images.food[2].alt,
                },
                {
                  src: images.food[3].src,
                  alt: images.food[3].alt,
                },
                {
                  src: images.food[4].src,
                  alt: images.food[4].alt,
                },
                {
                  src: images.food[5].src,
                  alt: images.food[5].alt,
                },
              ],
            },
          ],
        },
        {
          name: 'effects',
          elements: [
            {
              id: 'effects',
              pics: [
                {
                  src: images.effects[0].src,
                  alt: images.effects[0].alt,
                },
                {
                  src: images.effects[1].src,
                  alt: images.effects[1].alt,
                },
                {
                  src: images.effects[2].src,
                  alt: images.effects[2].alt,
                },
                {
                  src: images.effects[3].src,
                  alt: images.effects[3].alt,
                },
                {
                  src: images.effects[4].src,
                  alt: images.effects[4].alt,
                },
                {
                  src: images.effects[5].src,
                  alt: images.effects[5].alt,
                },
                {
                  src: images.effects[6].src,
                  alt: images.effects[6].alt,
                },
                {
                  src: images.effects[7].src,
                  alt: images.effects[7].alt,
                },
                {
                  src: images.effects[8].src,
                  alt: images.effects[8].alt,
                },
              ],
            },
          ],
        },
        {
          name: 'letters',
          elements: [
            {
              id: 'letters',
              pics: [],
            },
          ],
        },
      ],
    },
  ],
};

function reducerImages(state = initialState, action: IImages) {
  switch (action.type) {
    case 'IMAGE_CHANGE_ONE':
      const { loadName, loadValue } = action.payload;

      if (loadName === 'openCloseFolders') {
        return {
          ...state,
          [loadName]: !loadValue,
        };
      } else {
        return {
          ...state,
          [loadName]: loadValue,
        };
      }

    default:
      return state;
  }
}

export default reducerImages;
