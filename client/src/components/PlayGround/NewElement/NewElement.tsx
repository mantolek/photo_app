import React from "react";

// Interface
interface INewElement {
  id: string;
  left: number;
  top: number;
  height: number;
  width: number;
  opacity: number;
  element: string;
  rotate: number;
  filter: {
    name: string;
    value: string;
    final: string;
  }[],
  clippath: string;
  borderRadius: number;
  zIndex: number;
  heightA: {
    play: boolean;
    time: number;
    timing_func_name: string;
    timing_func_value_1: string;
    timing_func_value_2: string;
    timing_func_value_3: string;
    timing_func_value_4: string;
    timing_func_final: string;
  }[],
  widthA: {
    play: boolean;
    time: number;
    timing_func_name: string;
    timing_func_value_1: string;
    timing_func_value_2: string;
    timing_func_value_3: string;
    timing_func_value_4: string;
    timing_func_final: string;
  }[]
}

// New Element
class NewElement extends React.Component {
  constructor(props: INewElement){
    super(props)
    this.state = {
      id: props.id,
      left: props.left,
      top: props.top,
      height: props.height,
      width: props.width,
      opacity: props.opacity,
      element: props.element,
      rotate: props.rotate,
      filter: [
        {
          name: props.filter[0].name,
          value: props.filter[0].value,
          final: props.filter[0].final,
        }
      ],
      clippath: props.clippath,
      borderRadius: props.borderRadius,
      zIndex: props.zIndex,

      heightA: [
        {
          play: props.heightA[0].play,
          time: props.heightA[0].time,
          timing_func_name: props.heightA[0].timing_func_name,
          timing_func_value_1: props.heightA[0].timing_func_value_1,
          timing_func_value_2: props.heightA[0].timing_func_value_2,
          timing_func_value_3: props.heightA[0].timing_func_value_3,
          timing_func_value_4: props.heightA[0].timing_func_value_4,
          timing_func_final: props.heightA[0].timing_func_final,
        },
      ],
      widthA: [
        {
          play: props.widthA[0].play,
          time: props.widthA[0].time,
          timing_func_name: props.widthA[0].timing_func_name,
          timing_func_value_1: props.widthA[0].timing_func_value_1,
          timing_func_value_2: props.widthA[0].timing_func_value_2,
          timing_func_value_3: props.widthA[0].timing_func_value_3,
          timing_func_value_4: props.widthA[0].timing_func_value_4,
          timing_func_final: props.widthA[0].timing_func_final,
        },
      ]
    }
  }

  render() {
    return <></>;
  }
}

export default NewElement