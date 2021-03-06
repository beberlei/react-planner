'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fileO = require('react-icons/lib/fa/file-o');

var _fileO2 = _interopRequireDefault(_fileO);

var _mousePointer = require('react-icons/lib/fa/mouse-pointer');

var _mousePointer2 = _interopRequireDefault(_mousePointer);

var _zoomIn = require('react-icons/lib/ti/zoom-in');

var _zoomIn2 = _interopRequireDefault(_zoomIn);

var _zoomOut = require('react-icons/lib/ti/zoom-out');

var _zoomOut2 = _interopRequireDefault(_zoomOut);

var _handPaperO = require('react-icons/lib/fa/hand-paper-o');

var _handPaperO2 = _interopRequireDefault(_handPaperO);

var _directionsRun = require('react-icons/lib/md/directions-run');

var _directionsRun2 = _interopRequireDefault(_directionsRun);

var _plus = require('react-icons/lib/fa/plus');

var _plus2 = _interopRequireDefault(_plus);

var _undo = require('react-icons/lib/md/undo');

var _undo2 = _interopRequireDefault(_undo);

var _settings = require('react-icons/lib/md/settings');

var _settings2 = _interopRequireDefault(_settings);

var _toolbarButton = require('./toolbar-button');

var _toolbarButton2 = _interopRequireDefault(_toolbarButton);

var _toolbarSaveButton = require('./toolbar-save-button');

var _toolbarSaveButton2 = _interopRequireDefault(_toolbarSaveButton);

var _toolbarLoadButton = require('./toolbar-load-button');

var _toolbarLoadButton2 = _interopRequireDefault(_toolbarLoadButton);

var _reactIf = require('../../utils/react-if');

var _reactIf2 = _interopRequireDefault(_reactIf);

var _constants = require('../../constants');

var _sharedStyle = require('../../shared-style');

var SharedStyle = _interopRequireWildcard(_sharedStyle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon2D = function Icon2D() {
  return _react2.default.createElement(
    'p',
    { style: {
        fontSize: '19px',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0px'
      } },
    '2D'
  );
};

var Icon3D = function Icon3D() {
  return _react2.default.createElement(
    'p',
    { style: {
        fontSize: '19px',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '0px'
      } },
    '3D'
  );
};

var ASIDE_STYLE = {
  backgroundColor: SharedStyle.PRIMARY_COLOR.main,
  padding: '10px'
};

var STYLE_TOOLTIP = {
  position: 'absolute',
  width: '140px',
  color: SharedStyle.COLORS.white,
  background: SharedStyle.COLORS.black,
  height: '30px',
  lineHeight: '30px',
  textAlign: 'center',
  visibility: 'visible',
  borderRadius: '6px',
  opacity: '0.8',
  left: '100%',
  top: '50%',
  marginTop: '-15px',
  marginLeft: '15px',
  zIndex: '999',
  fontSize: '12px'
};

var STYLE_TOOLTIP_PIN = {
  position: 'absolute',
  top: '50%',
  right: '100%',
  marginTop: '-8px',
  width: '0',
  height: '0',
  borderRight: '8px solid #000000',
  borderTop: '8px solid transparent',
  borderBottom: '8px solid transparent'
};

function Toolbar(_ref, _ref2) {
  var state = _ref.state,
      width = _ref.width,
      height = _ref.height,
      toolbarButtons = _ref.toolbarButtons,
      allowProjectFileSupport = _ref.allowProjectFileSupport;
  var projectActions = _ref2.projectActions,
      viewer2DActions = _ref2.viewer2DActions,
      viewer3DActions = _ref2.viewer3DActions,
      linesActions = _ref2.linesActions,
      holesActions = _ref2.holesActions,
      itemsActions = _ref2.itemsActions,
      translator = _ref2.translator;


  var mode = state.get('mode');
  var mode3DCondition = ![_constants.MODE_3D_FIRST_PERSON, _constants.MODE_3D_VIEW].includes(mode);

  var sorter = [{
    index: 0, condition: allowProjectFileSupport, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: false,
        tooltip: translator.t('New project'),
        onClick: function onClick(event) {
          return confirm(translator.t('Would you want to start a new Project?')) ? projectActions.newProject() : null;
        } },
      _react2.default.createElement(_fileO2.default, null)
    )
  }, {
    index: 1, condition: allowProjectFileSupport,
    dom: _react2.default.createElement(_toolbarSaveButton2.default, { state: state })
  }, {
    index: 2, condition: allowProjectFileSupport,
    dom: _react2.default.createElement(_toolbarLoadButton2.default, { state: state })
  }, {
    index: 3, condition: true,
    dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_VIEWING_CATALOG].includes(mode),
        tooltip: translator.t('Open catalog'),
        onClick: function onClick(event) {
          return projectActions.openCatalog();
        } },
      _react2.default.createElement(_plus2.default, null)
    )
  }, {
    index: 4, condition: true, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_3D_VIEW].includes(mode),
        tooltip: translator.t('3D View'),
        onClick: function onClick(event) {
          return viewer3DActions.selectTool3DView();
        } },
      _react2.default.createElement(Icon3D, null)
    )
  }, {
    index: 5, condition: true, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_IDLE].includes(mode),
        tooltip: translator.t('2D View'),
        onClick: function onClick(event) {
          return projectActions.rollback();
        } },
      [_constants.MODE_3D_FIRST_PERSON, _constants.MODE_3D_VIEW].includes(mode) ? _react2.default.createElement(Icon2D, null) : _react2.default.createElement(_mousePointer2.default, null)
    )
  }, {
    index: 6, condition: true, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_3D_FIRST_PERSON].includes(mode),
        tooltip: translator.t('3D First Person'),
        onClick: function onClick(event) {
          return viewer3DActions.selectTool3DFirstPerson();
        } },
      _react2.default.createElement(_directionsRun2.default, null)
    )
  }, {
    index: 7, condition: mode3DCondition, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_2D_ZOOM_IN].includes(mode),
        tooltip: translator.t('Zoom in'),
        onClick: function onClick(event) {
          return viewer2DActions.selectToolZoomIn();
        } },
      _react2.default.createElement(_zoomIn2.default, null)
    )
  }, {
    index: 8, condition: mode3DCondition, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_2D_ZOOM_OUT].includes(mode),
        tooltip: translator.t('Zoom out'),
        onClick: function onClick(event) {
          return viewer2DActions.selectToolZoomOut();
        } },
      _react2.default.createElement(_zoomOut2.default, null)
    )
  }, {
    index: 9, condition: mode3DCondition, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_2D_PAN].includes(mode),
        tooltip: translator.t('Pan'),
        onClick: function onClick(event) {
          return viewer2DActions.selectToolPan();
        }
      },
      _react2.default.createElement(_handPaperO2.default, null)
    )
  }, {
    index: 10, condition: true, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: false,
        tooltip: translator.t('Undo (CTRL-Z)'),
        onClick: function onClick(event) {
          return projectActions.undo();
        } },
      _react2.default.createElement(_undo2.default, null)
    )
  }, {
    index: 11, condition: true, dom: _react2.default.createElement(
      _toolbarButton2.default,
      {
        active: [_constants.MODE_CONFIGURING_PROJECT].includes(mode),
        tooltip: translator.t('Configure project'),
        onClick: function onClick(event) {
          return projectActions.openProjectConfigurator();
        } },
      _react2.default.createElement(_settings2.default, null)
    )
  }];

  sorter = sorter.concat(toolbarButtons.map(function (Component, index) {
    return Component.prototype ? //if is a react component
    {
      condition: true,
      dom: _react2.default.createElement(Component, { mode: mode, state: state, key: index })
    } : { //else is a sortable toolbar button
      index: Component.index,
      condition: Component.condition,
      dom: _react2.default.createElement(Component.dom, { mode: mode, state: state, key: index })
    };
  }));

  sorter.sort(function (a, b) {
    if (a.index === undefined || a.index === null) {
      a.index = Number.MAX_SAFE_INTEGER;
    }

    if (b.index === undefined || b.index === null) {
      b.index = Number.MAX_SAFE_INTEGER;
    }

    return a.index - b.index;
  });

  return _react2.default.createElement(
    'aside',
    { style: _extends({}, ASIDE_STYLE, { maxWidth: width, maxHeight: height }), className: 'toolbar' },
    sorter.map(function (el, ind) {
      return _react2.default.createElement(
        _reactIf2.default,
        {
          key: ind,
          condition: el.condition,
          style: { position: 'relative' }
        },
        el.dom
      );
    })
  );
}

Toolbar.propTypes = {
  state: _propTypes2.default.object.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  allowProjectFileSupport: _propTypes2.default.bool.isRequired,
  toolbarButtons: _propTypes2.default.array
};

Toolbar.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  viewer2DActions: _propTypes2.default.object.isRequired,
  viewer3DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};