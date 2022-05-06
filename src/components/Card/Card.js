import React, { useCallback } from 'react';
import clsx from 'clsx';

import { THEME } from '../../constants/theme';
import { CARD_TYPES } from '../../constants/cards';
import { Box } from '../Box';
import {
  defineCardShape,
  defineInnerCardShape,
  defineNameProps,
  defineTitleProps,
  defineIDProps,
  defineIconCloseProps,
  defineDropAreaProps,
  defineButtonPlusProps,
} from './assets';
import { CloseIcon } from '../../lib/icons';
import { ButtonPlus } from '../ButtonPlus';
import { Wrapper } from './Card.style';

const colors = {
  [CARD_TYPES.basic]: THEME.colors.basic,
  [CARD_TYPES.advanced]: THEME.colors.advanced,
  [CARD_TYPES.additional]: THEME.colors.additional,
  inner: THEME.colors.white,
}

const Card = (props) => {
  const {
    id,
    row = 0,
    col = 0,
    name = '',
    title = '',
    type = CARD_TYPES.basic,
    dragging = false,
    onClose = null,
    onAdd = null,
  } = props;

  const onCloseClick = useCallback((event) => {
    event.stopPropagation();
    if (onClose) {
      onClose(id);
    }
  }, [id, onClose]);

  const onPlusClick = useCallback((event) => {
    event.stopPropagation();
    if (onAdd) {
      onAdd(id);
    }
  }, [id, onAdd]);

  const color = colors[type];
  const shape = defineCardShape(row, col);
  const innerShape = defineInnerCardShape(shape);
  const nameProps = defineNameProps(shape);
  const titleProps = defineTitleProps(innerShape);
  const idProps = defineIDProps(innerShape);
  const iconCloseProps = defineIconCloseProps(shape);
  const dropAreaProps = defineDropAreaProps(shape);
  const buttonPlusProps = defineButtonPlusProps(shape);

  const wrapperCls = clsx({
    dragging,
  });

  return (
    <Wrapper id={id} className={wrapperCls}>
      <Box
        id={id}
        backgroundColor={color}
        strokeColor={color}
        strokeWidth={1}
        {...shape}
      />
      <Box
        id={`inner-${id}`}
        backgroundColor={colors.inner}
        strokeColor={colors.inner}
        strokeWidth={1}
        {...innerShape}
      />
      <text id={`name-${id}`} {...nameProps}>{name}</text>
      <foreignObject {...titleProps}>
        <div xmlns="http://www.w3.org/1999/xhtml">{title}</div>
      </foreignObject>
      <text id={`id-${id}`} {...idProps}>{id}</text>
      <foreignObject {...iconCloseProps}>
        <span onClick={onCloseClick}>
          <CloseIcon />
        </span>
      </foreignObject>
      {!dragging && (
        <g {...dropAreaProps}>
          <foreignObject {...buttonPlusProps}>
          <span className="btn-plus" onClick={onPlusClick}>
            <ButtonPlus />
          </span>
          </foreignObject>
        </g>
      )}
    </Wrapper>
  );
};

export {
  Card,
};
