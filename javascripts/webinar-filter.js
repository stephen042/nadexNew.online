jQuery(function(){$(".filter-sidebar__filter").on("click",function(){var e=$(this),t=e.data("filter-event-type"),n=e.data("filter-event-action"),i=e.data("filter-event-label"),a=undefined;"upcoming"===t&&(a="webinar_interaction"),"archive"===t&&(a="webinar_library_interaction"),google360.sendEvent({event:a,event_category:"Nadex Learning",event_action:"Webinar Interaction",event_label:"add filter",event_value:undefined,filter_type:n,filter_value:i,interaction_type:"filter",add_or_remove:undefined})})});