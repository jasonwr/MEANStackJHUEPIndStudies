angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("uib/template/popover/popover-html.html",
            "<div class=\"popover\"\n" +
            "  tooltip-animation-class=\"fade\"\n" +
            "  uib-tooltip-classes\n" +
            "  ng-class=\"{ in: isOpen() }\">\n" +
            "  <div class=\"arrow\"></div>\n" +
            "\n" +
            "  <div class=\"popover-inner\">\n" +
            "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
            "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "");
  }]);
