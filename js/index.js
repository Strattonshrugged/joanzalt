// Generated by CoffeeScript 1.4.0
(function() {
  var CharmsViewModel, ready;

  CharmsViewModel = (function() {

    function CharmsViewModel() {
      var cart, lettering, _i, _len, _ref,
        _this = this;
      this.charms = [
        {
          type: 'Single Charm',
          imgUrl: 'images/single_charm.jpg',
          url: 'customize.php?type=single',
          selected: ko.observable(false),
          summaryNote: 'Single',
          sublabel: '+$20.00'
        }, {
          type: 'Double Charm',
          imgUrl: 'images/double_charm.jpg',
          url: 'customize.php?type=double',
          selected: ko.observable(false),
          summaryNote: 'Double',
          sublabel: '+$23.00'
        }
      ];
      this.letterings = [
        {
          imgUrl: 'images/small_type.jpg',
          label: 'small letters',
          selected: ko.observable(false),
          lettering: ko.observable(''),
          summaryNote: 'Small Letters',
          maxLetters: 8
        }, {
          imgUrl: 'images/large_type.jpg',
          label: 'LARGE letters',
          selected: ko.observable(false),
          lettering: ko.observable(''),
          summaryNote: 'Large Letters',
          maxLetters: 4
        }, {
          imgUrl: 'images/mixed_type.jpg',
          label: 'MiXeD letters',
          selected: ko.observable(false),
          lettering: ko.observable(''),
          summaryNote: 'Mixed Letters',
          maxLetters: 5
        }
      ];
      this.borders = [
        {
          imgUrl: 'images/dots.jpg',
          label: 'Yes, add a dot border',
          selected: ko.observable(false),
          summaryNote: 'Dotted Border'
        }, {
          imgUrl: 'images/no_dots.jpg',
          label: 'No border, please',
          selected: ko.observable(false),
          summaryNote: 'No Border'
        }
      ];
      this.chains = [
        {
          imgUrl: 'images/20_inch_chain.jpg',
          label: 'Necklace (20 inches)',
          sublabel: '+$23.00',
          selected: ko.observable(false),
          summaryNote: '20-inch necklace'
        }, {
          imgUrl: 'images/7_inch_chain.jpg',
          label: 'Bracelet (7.5 inches)',
          sublabel: '+$12.00',
          selected: ko.observable(false),
          summaryNote: '7-inch bracelet'
        }, {
          imgUrl: 'images/no_chain.jpg',
          label: 'No Chain',
          sublabel: '',
          selected: ko.observable(false),
          summaryNote: '(chain not included)'
        }
      ];
      this.hearts = [
        {
          imgUrl: 'images/heart_charm_spacer.jpg',
          label: 'Yes, add a heart charm',
          sublabel: '+$20.00',
          selected: ko.observable(false),
          summaryNote: 'Yes'
        }, {
          imgUrl: 'images/single_charm_select.jpg',
          label: 'No heart charm, please',
          sublabel: '',
          selected: ko.observable(false),
          summaryNote: 'No'
        }
      ];
      _ref = this.letterings;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        lettering = _ref[_i];
        lettering.remaining = (function(lettering) {
          return ko.computed(function(foo) {
            var left;
            left = lettering.maxLetters - lettering.lettering().length;
            return left + ' characters remaining';
          });
        })(lettering);
      }
      this.selectCharm = function(selectedCharm, event) {
        var charm, _j, _len1, _ref1;
        _ref1 = _this.charms;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          charm = _ref1[_j];
          charm.selected(charm.type === selectedCharm.type);
        }
        return true;
      };
      this.selectLettering = function(selectedLettering, event) {
        var _j, _len1, _ref1;
        _ref1 = _this.letterings;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          lettering = _ref1[_j];
          lettering.selected(lettering.label === selectedLettering.label);
        }
        return true;
      };
      this.selectBorder = function(selectedBorder, event) {
        var border, _j, _len1, _ref1;
        _ref1 = _this.borders;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          border = _ref1[_j];
          border.selected(border.label === selectedBorder.label);
        }
        return true;
      };
      this.selectChain = function(selectedChain, event) {
        var chain, _j, _len1, _ref1;
        _ref1 = _this.chains;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          chain = _ref1[_j];
          chain.selected(chain.label === selectedChain.label);
        }
        return true;
      };
      this.selectHeart = function(selectedHeart, event) {
        var heart, _j, _len1, _ref1;
        _ref1 = _this.hearts;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          heart = _ref1[_j];
          heart.selected(heart.label === selectedHeart.label);
        }
        return true;
      };
      this.selectedSummary = ko.computed(function() {
        var border, borderStyle, chain, chainStyle, charm, charmStyle, engraving, includeHeart, letteringStyle, price, _j, _k, _l, _len1, _len2, _len3, _len4, _m, _ref1, _ref2, _ref3, _ref4;
        price = 0;
        charmStyle = "";
        _ref1 = _this.charms;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          charm = _ref1[_j];
          if (charm.selected()) {
            charmStyle = charm.summaryNote;
            price += _this._sublabelToCost(charm.sublabel);
          }
        }
        letteringStyle = 'Small Letters';
        _ref2 = _this.letterings;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          lettering = _ref2[_k];
          if (lettering.selected()) {
            letteringStyle = lettering.summaryNote;
            engraving = lettering.lettering();
          }
        }
        borderStyle = "No Border";
        _ref3 = _this.borders;
        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
          border = _ref3[_l];
          if (border.selected()) {
            borderStyle = border.summaryNote;
          }
        }
        chainStyle = "No Chain";
        _ref4 = _this.chains;
        for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
          chain = _ref4[_m];
          if (chain.selected()) {
            chainStyle = chain.summaryNote;
            price += _this._sublabelToCost(chain.sublabel);
          }
        }
        if (_this.hearts[0].selected()) {
          includeHeart = _this.hearts[0].summaryNote;
          price += _this._sublabelToCost(_this.hearts[0].sublabel);
        } else {
          includeHeart = _this.hearts[1].summaryNote;
        }
        return {
          charmStyle: charmStyle,
          letteringStyle: letteringStyle,
          engraving: engraving,
          borderStyle: borderStyle,
          chainStyle: chainStyle,
          includeHeart: includeHeart,
          price: price
        };
      });
      cart = this._getShoppingCartData();
      this.addAnotherCharm = function(viewModel, event) {
        var border, chain, charm, heart, _j, _k, _l, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref1, _ref2, _ref3, _ref4, _ref5;
        this.addToCart(viewModel, event);
        _ref1 = this.charms;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          charm = _ref1[_j];
          charm.selected(false);
        }
        _ref2 = this.letterings;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          lettering = _ref2[_k];
          lettering.selected(false);
        }
        _ref3 = this.borders;
        for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
          border = _ref3[_l];
          border.selected(false);
        }
        _ref4 = this.chains;
        for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
          chain = _ref4[_m];
          chain.selected(false);
        }
        _ref5 = this.hearts;
        for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
          heart = _ref5[_n];
          heart.selected(false);
        }
        return $('html,body').scrollTop(0);
      };
      this.addToCart = function(viewModel, event) {
        var engraving, item, _j, _len1, _ref1;
        _ref1 = viewModel.letterings;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          lettering = _ref1[_j];
          if (lettering.selected()) {
            engraving = lettering.lettering();
          }
        }
        if (engraving === "") {
          engraving = "no engraving";
        } else {
          engraving = "engraving \"" + engraving + "\"";
        }
        if (!window.confirm("Are you sure you want to add this charm with " + engraving + " to the cart?")) {
          return;
        }
        item = viewModel.selectedSummary();
        cart = this._getShoppingCartData();
        cart.push(item);
        this.activeCart(cart);
        return this._setShoppingCartData(cart);
      };
      this.removeItem = function(index) {
        if (!window.confirm("Are you sure you want to remove this item from your cart?")) {
          return;
        }
        cart = _this._getShoppingCartData();
        cart.splice(index, 1);
        _this.activeCart(cart);
        return _this._setShoppingCartData(cart);
      };
      this.emptyCart = function(viewModel, event) {
        if (!window.confirm("Are you sure you remove all items from your cart?")) {
          return;
        }
        this.activeCart([]);
        return this._setShoppingCartData([]);
      };
      this.checkout = function(viewModel, event) {
        return console.log('checkout!');
      };
      this.activeCart = ko.observableArray(this._getShoppingCartData());
      this.hasCartItems = ko.computed(function() {
        return _this.activeCart().length > 0;
      });
      this.summarizeCartItem = function(item) {
        var summary;
        summary = "A <b>" + (item.charmStyle.toLowerCase()) + "</b> charm";
        if (item.engraving === "") {
          summary += " with no engraving.  ";
        } else {
          summary += " with a <b>" + (item.borderStyle.toLowerCase()) + "</b> engraved with <b>\"" + item.engraving + "\"</b>";
          summary += " in <b>" + (item.letteringStyle.toLowerCase()) + "</b>.  ";
        }
        if (item.includeHeart !== "No") {
          summary += "Includes a heart charm";
          if (item.chainStyle !== "No Chain") {
            summary += " and a " + (item.chainStyle.toLowerCase()) + ".";
          } else {
            summary += ".";
          }
        } else if (item.chainStyle !== "No Chain") {
          summary += "Includes a " + (item.chainStyle.toLowerCase()) + ".";
        }
        return summary;
      };
      this.priceCartItem = function(item) {
        return "$" + item.price;
      };
      this.paypalSummarizeCartItem = function(item) {
        var summary;
        summary = "" + (item.charmStyle.toLowerCase()) + " charm";
        if (item.engraving === "") {
          summary += ", no engraving";
        } else {
          summary += ", engraving: \"" + item.engraving + "\"";
        }
        if (item.includeHeart !== "No") {
          summary += ", includes heart charm";
          if (item.chainStyle !== "No Chain") {
            return summary += " and " + (item.chainStyle.toLowerCase());
          }
        } else if (item.chainStyle !== "No Chain") {
          return summary += ", includes " + (item.chainStyle.toLowerCase());
        }
      };
      this.paypalPriceCartItem = function(item) {
        return "" + item.price;
      };
      this.cartTotal = ko.computed(function() {
        var item, total, _j, _len1, _ref1;
        total = 0;
        _ref1 = _this.activeCart();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          item = _ref1[_j];
          total += item.price;
        }
        return "$" + total;
      });
    }

    CharmsViewModel.prototype._getShoppingCartData = function() {
      var data, dataStr;
      dataStr = $.cookie('shopping_cart');
      if (dataStr == null) {
        return [];
      }
      data = JSON.parse(dataStr);
      if (!Array.isArray(data)) {
        console.log('no shopping cart data');
        data = [];
      }
      return data;
    };

    CharmsViewModel.prototype._setShoppingCartData = function(data) {
      return $.cookie('shopping_cart', JSON.stringify(data));
    };

    CharmsViewModel.prototype._sublabelToCost = function(sublabel) {
      if (sublabel === '') {
        return 0;
      }
      return parseInt(sublabel.replace('$', '').replace('+', ''), 10);
    };

    return CharmsViewModel;

  })();

  ready = function() {
    var limitCharacters,
      _this = this;
    limitCharacters = function(element, valueAccessor, allBindings, viewModel) {
      var allowedNumberOfCharacters, currentValue, cutText;
      allowedNumberOfCharacters = valueAccessor();
      currentValue = allBindings.get('textInput');
      cutText = ko.unwrap(currentValue).substr(0, allowedNumberOfCharacters);
      return currentValue(cutText);
    };
    ko.bindingHandlers.limitCharacters = {
      update: limitCharacters
    };
    return ko.applyBindings(new CharmsViewModel());
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

}).call(this);
