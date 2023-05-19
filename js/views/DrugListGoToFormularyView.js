/*
A list of drug items, with anchor pointing to formularyView , e.g. /#formulary/2118/863/CA
This is to avoid anchor href hijacking. Maybe in the future goratchet is replaced with some better framework;
or even do away with anchor

Therefore, this view expects model to have f_id and state_code
 */
app.views.DrugListGoToFormularyView = Backbone.View.extend({
    tagName:'ul',
    className:'table-view',
    f_id: null,//will be passed in during init
    initialize:function (new_model) {
        const self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (drug) {
            self.$el.append(new app.views.DrugListGoToFormularyItemView({model:drug, f_id: self.f_id || drug.get('id')}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (drug) {
            this.$el.append(new app.views.DrugListGoToFormularyItemView({model:drug, f_id: this.f_id}).render().el);
        }, this);
        return this;
    }
});

app.views.DrugListGoToFormularyItemView = Backbone.View.extend({
    tagName:"li",
    f_id: null,
    className: "table-view-cell",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.$el.html(this.template($.extend(this.model.attributes,{})));
        return this;
    }
});
