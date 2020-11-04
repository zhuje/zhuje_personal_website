import widgetService from "../services/WidgetService"


export const DELETE_WIDGET = "DELETE_WIDGET";
export const CREATE_WIDGET = "CREATE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";

export const editWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, {...widget, editing: true})
        .then(status => dispatch(
            {type: UPDATE_WIDGET, widget: {...widget, editing: true}}));

export const okWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, {...widget, editing: false})
        .then(status => dispatch(
            {type: UPDATE_WIDGET, widget: {...widget, editing: false}}));

export const updateWidget = (dispatch, widget) =>
  dispatch({type: UPDATE_WIDGET, widget});

export const deleteWidget = (dispatch, widget) =>
    widgetService.deleteWidget(widget)
        .then(status => dispatch({type: DELETE_WIDGET, widget}));

export const createWidgetForTopic = (dispatch,topicId) =>
    widgetService.createWidgetForTopic(topicId)
        .then(widget => dispatch({
                                     type: CREATE_WIDGET,
                                     widget,
                                        topicId: topicId
                                 }));

export const updateWidgetOrder = (dispatch, newWidgets) =>
    widgetService.updateWidgetOrder(newWidgets)
        .then(responseNewWidgetOrder => dispatch({
                                    type: "UPDATE_WIDGET_ORDER",
                                     responseNewWidgetOrder
                                   }));