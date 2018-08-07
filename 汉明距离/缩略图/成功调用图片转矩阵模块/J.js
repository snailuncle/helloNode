(function() {
  function typeToClass(type) {
      if (typeof(type) != 'string') {
          return type;
      }
      var types = {
          "int": "Integer",
          "long": "Long",
          "string": "String",
          "double": "Double",
          "char": "Character",
          "byte": "Byte",
          "float": "Float"
      };
      if (types[type]) {
          return Packages["java.lang." + types[type]].TYPE;
      }
      return Packages[type];
  }
  function array(type) {
      var clazz = typeToClass(type);
      var args = arguments;
      args[0] = clazz;
      return java.lang.reflect.Array.newInstance.apply(null, args);
  }
  array('int',10)
  var _J = {
      "array": array
  };
  if (typeof(module) != 'undefined') {
      module.exports = _J;
  } else {
      J = _J;
  }
})();
