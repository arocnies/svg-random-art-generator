if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'svg-random-art-generator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'svg-random-art-generator'.");
}
this['svg-random-art-generator'] = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwCCE = Kotlin.throwCCE;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Unit = Kotlin.kotlin.Unit;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  Color.prototype = Object.create(Enum.prototype);
  Color.prototype.constructor = Color;
  function Color(name, ordinal, rgba) {
    Enum.call(this);
    this.rgba = rgba;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Color_initFields() {
    Color_initFields = function () {
    };
    Color$RED_instance = new Color('RED', 0, new RGBA(128));
    Color$ORANGE_instance = new Color('ORANGE', 1, new RGBA(128, 64));
    Color$YELLOW_instance = new Color('YELLOW', 2, new RGBA(128, 128));
    Color$GREEN_instance = new Color('GREEN', 3, new RGBA(void 0, 128));
    Color$CYAN_instance = new Color('CYAN', 4, new RGBA(void 0, 128, 128));
    Color$BLUE_instance = new Color('BLUE', 5, new RGBA(void 0, void 0, 128));
    Color$PURPLE_instance = new Color('PURPLE', 6, new RGBA(64, void 0, 128));
    Color$PINK_instance = new Color('PINK', 7, new RGBA(128, void 0, 128));
    Color$GRAY_instance = new Color('GRAY', 8, new RGBA(64, 64, 64));
    Color$ALL_instance = new Color('ALL', 9, new RGBA());
  }
  var Color$RED_instance;
  function Color$RED_getInstance() {
    Color_initFields();
    return Color$RED_instance;
  }
  var Color$ORANGE_instance;
  function Color$ORANGE_getInstance() {
    Color_initFields();
    return Color$ORANGE_instance;
  }
  var Color$YELLOW_instance;
  function Color$YELLOW_getInstance() {
    Color_initFields();
    return Color$YELLOW_instance;
  }
  var Color$GREEN_instance;
  function Color$GREEN_getInstance() {
    Color_initFields();
    return Color$GREEN_instance;
  }
  var Color$CYAN_instance;
  function Color$CYAN_getInstance() {
    Color_initFields();
    return Color$CYAN_instance;
  }
  var Color$BLUE_instance;
  function Color$BLUE_getInstance() {
    Color_initFields();
    return Color$BLUE_instance;
  }
  var Color$PURPLE_instance;
  function Color$PURPLE_getInstance() {
    Color_initFields();
    return Color$PURPLE_instance;
  }
  var Color$PINK_instance;
  function Color$PINK_getInstance() {
    Color_initFields();
    return Color$PINK_instance;
  }
  var Color$GRAY_instance;
  function Color$GRAY_getInstance() {
    Color_initFields();
    return Color$GRAY_instance;
  }
  var Color$ALL_instance;
  function Color$ALL_getInstance() {
    Color_initFields();
    return Color$ALL_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [Enum]
  };
  function Color$values() {
    return [Color$RED_getInstance(), Color$ORANGE_getInstance(), Color$YELLOW_getInstance(), Color$GREEN_getInstance(), Color$CYAN_getInstance(), Color$BLUE_getInstance(), Color$PURPLE_getInstance(), Color$PINK_getInstance(), Color$GRAY_getInstance(), Color$ALL_getInstance()];
  }
  Color.values = Color$values;
  function Color$valueOf(name) {
    switch (name) {
      case 'RED':
        return Color$RED_getInstance();
      case 'ORANGE':
        return Color$ORANGE_getInstance();
      case 'YELLOW':
        return Color$YELLOW_getInstance();
      case 'GREEN':
        return Color$GREEN_getInstance();
      case 'CYAN':
        return Color$CYAN_getInstance();
      case 'BLUE':
        return Color$BLUE_getInstance();
      case 'PURPLE':
        return Color$PURPLE_getInstance();
      case 'PINK':
        return Color$PINK_getInstance();
      case 'GRAY':
        return Color$GRAY_getInstance();
      case 'ALL':
        return Color$ALL_getInstance();
      default:throwISE('No enum constant color.Color.' + name);
    }
  }
  Color.valueOf_61zpoe$ = Color$valueOf;
  function RGBA(r, g, b, a) {
    RGBA$Companion_getInstance();
    if (r === void 0)
      r = 0;
    if (g === void 0)
      g = 0;
    if (b === void 0)
      b = 0;
    if (a === void 0)
      a = 0.0;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  function RGBA$Companion() {
    RGBA$Companion_instance = this;
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  RGBA$Companion.prototype.fromHexString_61zpoe$ = function (hex) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = Regex_init('#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})', RegexOption.IGNORE_CASE).find_905azu$(hex)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Not a hex string'.toString());
    }
    var results = tmp$_0;
    var r = toInt(results.groupValues.get_za3lpa$(1), 16);
    var g = toInt(results.groupValues.get_za3lpa$(2), 16);
    var b = toInt(results.groupValues.get_za3lpa$(3), 16);
    return new RGBA(r, g, b);
  };
  RGBA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RGBA$Companion_instance = null;
  function RGBA$Companion_getInstance() {
    if (RGBA$Companion_instance === null) {
      new RGBA$Companion();
    }
    return RGBA$Companion_instance;
  }
  RGBA.prototype.toString = function () {
    return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
  };
  function RGBA$toHexString$toHex($receiver) {
    var tmp$;
    var hex = typeof (tmp$ = $receiver.toString(16)) === 'string' ? tmp$ : throwCCE();
    return hex.length === 1 ? '0' + hex : hex;
  }
  RGBA.prototype.toHexString = function () {
    var toHex = RGBA$toHexString$toHex;
    return '#' + toHex(this.r) + toHex(this.g) + toHex(this.b);
  };
  RGBA.prototype.plus_kka19b$ = function (other) {
    return new RGBA(this.r + other.r | 0, this.g + other.g | 0, this.b + other.b | 0, this.a);
  };
  RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: []
  };
  function main$lambda(closure$svgContainer) {
    return function ($receiver) {
      clear(closure$svgContainer);
      var svg = RandomSvgFactory_getInstance().createSvg_qaoz3d$($receiver.width, $receiver.height, $receiver.numOfShapes, $receiver.color);
      setStyleCentered(svg);
      closure$svgContainer.appendChild(svg);
      return Unit;
    };
  }
  function main(args) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = getSvgContainerElement()) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('Could not find experimental.svg container'.toString());
    }
    var svgContainer = tmp$_0;
    var svgGenForm = initSvgGeneratorForm();
    svgGenForm.onGenerate = main$lambda(svgContainer);
  }
  function getSvgContainerElement() {
    return document.getElementById('svgContainer');
  }
  function initSvgGeneratorForm() {
    var tmp$;
    return new SvgGeneratorForm(Kotlin.isType(tmp$ = document.getElementById('generateForm'), HTMLElement) ? tmp$ : throwCCE());
  }
  function setStyleCentered($receiver) {
    $receiver.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
  }
  function RandomSvgFactory() {
    RandomSvgFactory_instance = this;
    this.seed_0 = new RGBA();
  }
  function RandomSvgFactory$createSvg$lambda(closure$width, closure$height, closure$numOfShapes, this$RandomSvgFactory) {
    return function ($receiver) {
      $receiver.width = closure$width;
      $receiver.height = closure$height;
      var times = closure$numOfShapes;
      for (var index = 0; index < times; index++) {
        this$RandomSvgFactory.randomShape_0($receiver);
      }
      return Unit;
    };
  }
  RandomSvgFactory.prototype.createSvg_qaoz3d$ = function (width, height, numOfShapes, seed) {
    RandomSvgFactory_getInstance().seed_0 = seed;
    return SvgBuilder$Companion_getInstance().svg_o1awq2$(RandomSvgFactory$createSvg$lambda(width, height, numOfShapes, this));
  };
  RandomSvgFactory.prototype.randomShape_0 = function ($receiver) {
    var tmp$;
    tmp$ = Math.random();
    if (rangeTo(0.0, 0.3).contains_mef7kx$(tmp$))
      this.randomRect_0($receiver);
    else if (rangeTo(0.3, 0.6).contains_mef7kx$(tmp$))
      this.randomCircle_0($receiver);
    else if (rangeTo(0.6, 1.0).contains_mef7kx$(tmp$))
      this.randomPoly_0($receiver);
  };
  RandomSvgFactory.prototype.randomRect_0 = function ($receiver) {
    $receiver.rect_lf9o76$(this.getRandomX_0($receiver), this.getRandomY_0($receiver), this.getRandomLength_0($receiver), this.getRandomLength_0($receiver), 'fill: ' + this.getRandomColor_0());
  };
  RandomSvgFactory.prototype.randomCircle_0 = function ($receiver) {
    $receiver.circle_94qy4s$(this.getRandomX_0($receiver), this.getRandomY_0($receiver), this.getRandomLength_0($receiver) / 3 | 0, 'fill: ' + this.getRandomColor_0());
  };
  RandomSvgFactory.prototype.randomPoly_0 = function ($receiver) {
    $receiver.polygon_r0ugoq$([to(this.getRandomX_0($receiver), this.getRandomY_0($receiver)), to(this.getRandomX_0($receiver), this.getRandomY_0($receiver)), to(this.getRandomX_0($receiver), this.getRandomY_0($receiver))].slice(), 'fill: ' + this.getRandomColor_0());
  };
  RandomSvgFactory.prototype.getRandomX_0 = function ($receiver) {
    return roundToInt($receiver.width * Math.random());
  };
  RandomSvgFactory.prototype.getRandomY_0 = function ($receiver) {
    return roundToInt($receiver.height * Math.random());
  };
  var Math_0 = Math;
  RandomSvgFactory.prototype.getRandomLength_0 = function ($receiver) {
    var a = $receiver.width;
    var b = $receiver.height;
    return roundToInt(Math_0.max(a, b) * Math.random());
  };
  RandomSvgFactory.prototype.getRandomColor_0 = function () {
    var randomColor = new RGBA(this.rand_0(127), this.rand_0(127), this.rand_0(127), Math.random() / 2.0);
    return randomColor.plus_kka19b$(this.seed_0);
  };
  RandomSvgFactory.prototype.rand_0 = function (upperBoundInclusive) {
    return roundToInt(Math.random() * upperBoundInclusive);
  };
  RandomSvgFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RandomSvgFactory',
    interfaces: []
  };
  var RandomSvgFactory_instance = null;
  function RandomSvgFactory_getInstance() {
    if (RandomSvgFactory_instance === null) {
      new RandomSvgFactory();
    }
    return RandomSvgFactory_instance;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function SvgBuilder() {
    SvgBuilder$Companion_getInstance();
    this.children_do24fi$_0 = ArrayList_init();
    this.width = 0;
    this.height = 0;
  }
  SvgBuilder.prototype.build = function () {
    var tmp$;
    var svg = Kotlin.isType(tmp$ = document.createElementNS(SvgBuilder$Companion_getInstance().SVG_NS, 'svg'), SVGSVGElement) ? tmp$ : throwCCE();
    svg.setAttribute('width', this.width.toString());
    svg.setAttribute('height', this.height.toString());
    var tmp$_0;
    tmp$_0 = this.children_do24fi$_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      svg.appendChild(element);
    }
    return svg;
  };
  SvgBuilder.prototype.rect_lf9o76$ = function (x, y, width, height, style) {
    if (style === void 0)
      style = 'fill: 0xbada55';
    var tmp$;
    var rect = Kotlin.isType(tmp$ = document.createElementNS(SvgBuilder$Companion_getInstance().SVG_NS, 'rect'), SVGRectElement) ? tmp$ : throwCCE();
    var tmp$_0 = this.children_do24fi$_0;
    rect.setAttributeNS(null, 'x', x.toString());
    rect.setAttributeNS(null, 'y', y.toString());
    rect.setAttributeNS(null, 'width', width.toString());
    rect.setAttributeNS(null, 'height', height.toString());
    rect.setAttributeNS(null, 'style', style);
    tmp$_0.add_11rb$(rect);
  };
  SvgBuilder.prototype.circle_94qy4s$ = function (x, y, radius, style) {
    if (style === void 0)
      style = 'fill: 0xbada55';
    var tmp$;
    var circle = Kotlin.isType(tmp$ = document.createElementNS(SvgBuilder$Companion_getInstance().SVG_NS, 'circle'), SVGCircleElement) ? tmp$ : throwCCE();
    var tmp$_0 = this.children_do24fi$_0;
    circle.setAttributeNS(null, 'cx', x.toString());
    circle.setAttributeNS(null, 'cy', y.toString());
    circle.setAttributeNS(null, 'r', radius.toString());
    circle.setAttributeNS(null, 'style', style);
    tmp$_0.add_11rb$(circle);
  };
  function SvgBuilder$polygon$lambda$lambda(it) {
    return it.first.toString() + ' ' + it.second;
  }
  SvgBuilder.prototype.polygon_r0ugoq$ = function (points, style) {
    if (style === void 0)
      style = 'fill: 0xbada55';
    var tmp$;
    var poly = Kotlin.isType(tmp$ = document.createElementNS(SvgBuilder$Companion_getInstance().SVG_NS, 'polygon'), SVGPolygonElement) ? tmp$ : throwCCE();
    var tmp$_0 = this.children_do24fi$_0;
    poly.setAttributeNS(null, 'points', joinToString(points, void 0, void 0, void 0, void 0, void 0, SvgBuilder$polygon$lambda$lambda));
    poly.setAttributeNS(null, 'style', style);
    tmp$_0.add_11rb$(poly);
  };
  function SvgBuilder$Companion() {
    SvgBuilder$Companion_instance = this;
    this.SVG_NS = 'http://www.w3.org/2000/svg';
  }
  SvgBuilder$Companion.prototype.svg_o1awq2$ = function (block) {
    var svgBuilder = new SvgBuilder();
    block(svgBuilder);
    return svgBuilder.build();
  };
  SvgBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SvgBuilder$Companion_instance = null;
  function SvgBuilder$Companion_getInstance() {
    if (SvgBuilder$Companion_instance === null) {
      new SvgBuilder$Companion();
    }
    return SvgBuilder$Companion_instance;
  }
  SvgBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function SvgGeneratorForm(rootElement) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.widthInput_0 = Kotlin.isType(tmp$ = rootElement.querySelector('#width'), HTMLInputElement) ? tmp$ : throwCCE();
    this.heightInput_0 = Kotlin.isType(tmp$_0 = rootElement.querySelector('#height'), HTMLInputElement) ? tmp$_0 : throwCCE();
    this.numOfShapesInput_0 = Kotlin.isType(tmp$_1 = rootElement.querySelector('#numOfShapes'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.colorInput_0 = Kotlin.isType(tmp$_2 = rootElement.querySelector('#color'), HTMLInputElement) ? tmp$_2 : throwCCE();
    this.genButton_0 = Kotlin.isType(tmp$_3 = rootElement.querySelector('#genButton'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.onGenerate_fizprf$_0 = SvgGeneratorForm$onGenerate$lambda;
  }
  Object.defineProperty(SvgGeneratorForm.prototype, 'width', {
    get: function () {
      return toInt_0(this.widthInput_0.value);
    }
  });
  Object.defineProperty(SvgGeneratorForm.prototype, 'height', {
    get: function () {
      return toInt_0(this.heightInput_0.value);
    }
  });
  Object.defineProperty(SvgGeneratorForm.prototype, 'numOfShapes', {
    get: function () {
      return toInt_0(this.numOfShapesInput_0.value);
    }
  });
  Object.defineProperty(SvgGeneratorForm.prototype, 'color', {
    get: function () {
      return RGBA$Companion_getInstance().fromHexString_61zpoe$(this.colorInput_0.value);
    }
  });
  function SvgGeneratorForm$set_SvgGeneratorForm$onGenerate$lambda(this$SvgGeneratorForm) {
    return function (it) {
      this$SvgGeneratorForm.onGenerate(this$SvgGeneratorForm);
      return Unit;
    };
  }
  Object.defineProperty(SvgGeneratorForm.prototype, 'onGenerate', {
    get: function () {
      return this.onGenerate_fizprf$_0;
    },
    set: function (value) {
      this.onGenerate_fizprf$_0 = value;
      this.genButton_0.onclick = SvgGeneratorForm$set_SvgGeneratorForm$onGenerate$lambda(this);
    }
  });
  function SvgGeneratorForm$onGenerate$lambda($receiver) {
    return Unit;
  }
  SvgGeneratorForm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgGeneratorForm',
    interfaces: []
  };
  Object.defineProperty(Color, 'RED', {
    get: Color$RED_getInstance
  });
  Object.defineProperty(Color, 'ORANGE', {
    get: Color$ORANGE_getInstance
  });
  Object.defineProperty(Color, 'YELLOW', {
    get: Color$YELLOW_getInstance
  });
  Object.defineProperty(Color, 'GREEN', {
    get: Color$GREEN_getInstance
  });
  Object.defineProperty(Color, 'CYAN', {
    get: Color$CYAN_getInstance
  });
  Object.defineProperty(Color, 'BLUE', {
    get: Color$BLUE_getInstance
  });
  Object.defineProperty(Color, 'PURPLE', {
    get: Color$PURPLE_getInstance
  });
  Object.defineProperty(Color, 'PINK', {
    get: Color$PINK_getInstance
  });
  Object.defineProperty(Color, 'GRAY', {
    get: Color$GRAY_getInstance
  });
  Object.defineProperty(Color, 'ALL', {
    get: Color$ALL_getInstance
  });
  var package$color = _.color || (_.color = {});
  package$color.Color = Color;
  Object.defineProperty(RGBA, 'Companion', {
    get: RGBA$Companion_getInstance
  });
  package$color.RGBA = RGBA;
  _.main_kand9s$ = main;
  var package$svg = _.svg || (_.svg = {});
  Object.defineProperty(package$svg, 'RandomSvgFactory', {
    get: RandomSvgFactory_getInstance
  });
  Object.defineProperty(SvgBuilder, 'Companion', {
    get: SvgBuilder$Companion_getInstance
  });
  package$svg.SvgBuilder = SvgBuilder;
  _.SvgGeneratorForm = SvgGeneratorForm;
  main([]);
  Kotlin.defineModule('svg-random-art-generator', _);
  return _;
}(typeof this['svg-random-art-generator'] === 'undefined' ? {} : this['svg-random-art-generator'], kotlin);
