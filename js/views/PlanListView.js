app.views.PlanListView = Backbone.View.extend({
    tagName:'ul',
    className:'table-view',
    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (plan) {
            self.$el.append(new app.views.PlanListItemView({model:plan}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (plan) {
            this.$el.append(new app.views.PlanListItemView({model:plan}).render().el);
        }, this);
        return this;
    }
});

app.views.PlanListItemView = Backbone.View.extend({
    tagName:"li",
    appendParamsToLi: function(){
        //$("a", this.$el).attr("href",  "#formulary/4692/1838/");
        $("a", this.$el).removeClass("pull-right");
    },
    className: "table-view-cell",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.model.attributes["rxcui"] = app.views.PlanListItemView.rxcui;/*each plan list item displays selected drug. Drug_id stored by drugView (Backbone view acting as controller)*/
        this.$el.html(this.template(this.model.attributes));
        this.appendParamsToLi();
        return this;
    }
},
    {
        rxcui:"-1" /*initial rxcui. Used to store selected rxcui from drug model*/
    }
);
