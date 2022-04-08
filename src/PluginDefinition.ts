import PluginLocalization from "./PluginLocalization.csv";
import {ApiUtils, ILocalizationManager, IWidgetManager} from "@ic3/reporting-api";
import {KpiCardDefinition} from "./widget/KpiCardDefinition";

/**
 * The plugin definition exposed as a remote Webpack module to the icCube dashboards application.
 */
const PluginDefinition = ApiUtils.makePlugin({

    /**
     * The ID used to identify this plugin within the icCube dashboards application.
     *
     * Keep that id simple (i.e., ASCII letter without any dot, space, separator, etc...) as it will be used
     * as a folder name (once deployed into an icCube server), Webpack module name, localization id, etc...
     *
     * It must be unique across all the loaded plugins.
     */
    id: "MyPluginReact",

    registerLocalization(manager: ILocalizationManager) {

        console.log("[MyPluginReact] registerLocalization")

        manager.registerLocalization(PluginLocalization);

    },

    registerWidgets(manager: IWidgetManager) {

        console.log("[MyPluginReact] registerWidgets")

        manager.registerWidget(KpiCardDefinition);

    },

});

export default PluginDefinition;