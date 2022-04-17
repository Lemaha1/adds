(function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AboutBase = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = function() {
return "community-about";
}, o.prototype.ui = function() {
return {
aboutDescriptionContainer:".about-description-container",
aboutMightyExpandableBox:".mighty-expandable-box",
plansCarouselContainer:".plans-carousel-container"
};
}, o.prototype.regions = function() {
return {
headerRegion:".header-region",
aboutDescriptionRegion:".about-description-region",
hostsBarRegion:".hosts-bar-region",
infoRegion:".info-region",
privacyInfoRegion:".privacy-info-region",
plansRegion:".plans-region"
};
}, o.prototype.defaultOptions = function() {
return {
enableActions:!0,
showPlansCarousel:!0
};
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
space_display_name:this.model.getOwningSpace().displayName(),
hosts_display_name:this.model.getHostsDisplayName(),
show_plans_carousel:this.options.showPlansCarousel
});
}, o.prototype.onShow = function() {
return this._showHeaderRegion(), this._setupAboutDescriptionExpansion();
}, o.prototype._setupAboutDescriptionExpansion = function() {}, o.prototype._showHeaderRegion = function() {}, 
o.prototype._showInfo = function(t) {
var e;
return e = new Mighty.CommunitiesApp.InfoWidget({
model:t
}), this.infoRegion.show(e);
}, o.prototype._showPrivacyInfo = function(t) {
var e;
if (this._shouldShowPrivacyInfo()) return e = new Mighty.CommunitiesApp.PrivacyInfoWidget({
model:t
}), this.privacyInfoRegion.show(e);
}, o.prototype._shouldShowPrivacyInfo = function() {
return !M.network.hasCustomApp();
}, o.prototype._showPlansCarousel = function() {
return this.options.showPlansCarousel && this.bundlesCollection ? this.bundlesCollection.onLoad(function(t) {
return function() {
var e;
if (!t.isClosed) return t.bundlesCollection.length > 0 && t.triggerMethod("otherBundlesLoaded"), 
t.bundlesCollection.length > 0 ? (t.ui.plansCarouselContainer.show(), e = new Mighty.Views.BundlesGrid({
collection:t.bundlesCollection
}), t.plansRegion.show(e), t.options.scrollToPlans ? t._scrollToPlansCarousel() :void 0) :t.ui.aboutPageFooterPlansContainer.hide();
};
}(this)) :void this.ui.aboutPageFooterPlansContainer.hide();
}, o;
}(Mighty.Views.Layout);
});
}).call(this), function() {
this.Mighty.module("Views", function(t, e, o, n, i, r) {
return this.AboutHeaderViewHelpers = {
getHeaderEmbeddedLink:function() {},
showHeaderVideo:function(t) {
var e;
return (e = this.getHeaderEmbeddedLink()) ? (this.$(".video-overlay").removeClass("hidden"), 
t.attr("href", e.get("url")), M.Lightbox.setupMagnificVideoLightBox(t)) :void 0;
}
};
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AboutBundle = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.include(Mighty.Views.AboutHeaderViewHelpers), o.include(Mighty.Views.AboutBundleHelper), 
o.prototype.template = "communities/about/about_bundle", o.prototype.className = function() {
return o.__super__.className.apply(this, arguments) + " community-about-bundle";
}, o.prototype.withGrayBackground = !0, o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
productAvatarSize:"small",
hostsAvatarSize:"small",
additonalDescriptionClasses:"",
showPurchaseSummary:!0,
showFooter:!0,
additionalPresenceBarClasses:""
});
}, o.prototype.ui = function() {
return s.extend(o.__super__.ui.apply(this, arguments), {
buyButton:".bundle-buy-button",
mobileBuyButton:".mobile-bundle-buy-button",
bundleImage:".about-bundle-image",
aboutPageFooterPlansContainer:".plans-carousel-container",
priceSummaryContainer:".price-summary-container"
});
}, o.prototype.events = {
"click .bundle-buy-button":"_handleBuyButtonClick",
"click .mobile-bundle-buy-button":"_handleBuyButtonClick"
}, o.prototype.regions = function() {
return s.extend(o.__super__.regions.apply(this, arguments), {
bundleProductsListRegion:".bundle-products-region",
benefitsRegion:".benefits-region",
priceSummaryRegion:".price-summary-region",
aboutCourseTableOfContentsRegion:".about-course-table-of-contents-region"
});
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
image_url:this._getImageUrl(),
show_header_image:this._shouldShowHeaderImage(),
is_single_bundle:this.model.isSingleBundle(),
show_benefits:this.model.hasBenefits(),
buy_button_text:this.model.buyActionName(),
mobile_buy_button_text:this.model.buyActionName(!0),
legal_footer_text:this._getLegalFooterText(),
show_buy:!M.currentUser.hasBoughtBundle(this.model.id) && this.model.hasStripePlan(),
space_display_name:this.model.firstProduct().displayName(),
show_description:this._getMetadataModel().get("description"),
show_purchase_summary:this._shouldShowPurchaseSummary(),
show_footer:this.options.showFooter,
show_course_table_of_contents:this.model.isSingleBundle() && this.model.firstProduct().isCourse()
});
}, o.prototype.initialize = function() {
return this.bundlesCollection = this.model.memberSuggestedProductBundles;
}, o.prototype.onRender = function() {
return this.showHeaderVideo(this.ui.bundleImage), this.options.showFooter ? this.$el.addClass("without-padding-bottom") :void 0;
}, o.prototype.onShow = function() {
return o.__super__.onShow.apply(this, arguments), this._showPlansCarousel(), this._showBenefitsRegion(), 
this._showPriceBreakdown(), this._showHostsBarRegion(), this._showProductsList(), 
this.model.isSingleBundle() && this._showSingleProductDetails(), this.options.scrollToSummary && this._scrollToPriceSummary(), 
this.listenTo(M.eventBus, "bundleAbout:scrollToSummary", function(t) {
return function() {
return t._scrollToPriceSummary();
};
}(this)), this.listenTo(M.network.payments.availableCurrencies, "currencyChanged", this._handleCurrencyChanged);
}, o.prototype.getFlyoutBarView = function() {
return new Mighty.Views.AboutBundleBar({
model:this.model,
enablePrimaryButton:this.options.enableActions,
triggerScrollToSummary:!0
});
}, o.prototype._showProductsList = function() {
var t;
return t = new Mighty.Views.MightyProductsList({
model:this.model,
maxCount:10,
size:this.options.productAvatarSize
}), this.bundleProductsListRegion.show(t);
}, o.prototype._setupAboutDescriptionExpansion = function() {
return this.aboutDescriptionRegion.show(new Mighty.Views.AboutDescription({
model:this._getMetadataModel(),
additionalClasses:this.options.additonalDescriptionClasses
}));
}, o.prototype._showHeaderRegion = function() {
var t, e;
return e = new Mighty.Views.AboutBundleHeader({
model:this.model,
enableActions:this.options.enableActions,
showMoreBuyingOptions:(null != (t = this.bundlesCollection) ? t.length :void 0) > 0
}), this.listenTo(e, "trigger:scroll_to_footer_plan", function(t) {
return function() {
return t._scrollToFooterPlans();
};
}(this)), this.headerRegion.show(e);
}, o.prototype.onOtherBundlesLoaded = function() {
var t, e;
return null != (t = this.headerRegion) && null != (e = t.currentView) ? e.toggleOtherBundlesButton(!0) :void 0;
}, o.prototype._showHostsBarRegion = function() {
return this.hostsBarRegion.show(new Mighty.CommunitiesApp.PresenceBar({
model:this.model,
size:this.options.hostsAvatarSize,
collection:this.model.hosts,
enableLinks:this.model.isInternalBundle(),
showChat:!1,
showSeeMoreUrl:!1,
showFollow:!1,
additionalContentClasses:this.options.additionalPresenceBarClasses,
maxFlexibleItems:3
}));
}, o.prototype._showSingleProductDetails = function() {
var t;
return t = this.model.firstProduct(), this._showCourseTableOfContents(), this._showInfo(t), 
this._showPrivacyInfo(t);
}, o.prototype._showBenefitsRegion = function() {
var t;
if (this.model.hasBenefits()) return t = new Mighty.Views.BundleBenefitsList({
collection:this.model.benefits
}), this.benefitsRegion.show(t);
}, o.prototype._showPriceBreakdown = function() {
var t;
if (this._shouldShowPurchaseSummary()) return t = new Mighty.Views.PaymentsPriceBreakdown({
model:this.model,
showProductsList:!1,
skipTaxCalculation:!0
}), this.priceSummaryRegion.show(t), this.listenTo(this.model.plans, "selectionChanged", function(t) {
return function() {
return t._toggleSelectedPlan(t.model.plans.selected());
};
}(this)), this._toggleSelectedPlan(this._getSelectedPlan());
}, o.prototype._showCourseTableOfContents = function() {
return this.options.course && this.options.course.isEnabledFeature("content_preview") ? this.aboutCourseTableOfContentsRegion.show(new Mighty.Views.AboutCourseTableOfContents({
model:this.options.course,
actionButtonLabel:this.model.buyActionName(!0),
actionButtonCallback:function(t) {
return function() {
return t.model.hasMultiplePlans() ? t._scrollToFooterPlans() :Mighty.navigate(t.model.buyLink(t.model.suggestedPlan), {
trigger:!0
});
};
}(this)
})) :void 0;
}, o.prototype._getSelectedPlan = function() {
var t;
return null != (t = this.priceSummaryRegion.currentView) ? t.getSelectedPlan() :void 0;
}, o.prototype._getLegalFooterText = function() {
return trl("You'll have a chance to review your purchase.");
}, o.prototype._handleBuyButtonClick = function(t) {
return this.model.isExternalBundle() ? void 0 :M.promptToJoinIfNonMember() ? (t.preventDefault(), 
t.stopPropagation()) :void 0;
}, o.prototype._toggleSelectedPlan = function(t) {
return this.ui.buyButton.text(t.buyActionName(this.model.hasMultiplePlans())), this.ui.buyButton.attr("href", this.model.buyLink(t)), 
this.ui.buyButton.toggleClass("navigate", this.model.navigateBuyLink(t)), this.ui.mobileBuyButton.text(t.buyActionName(this.model.hasMultiplePlans(), !0)), 
this.ui.mobileBuyButton.attr("href", this.model.buyLink(t)), this.ui.buyButton.toggleClass("navigate", this.model.navigateBuyLink(t));
}, o.prototype._scrollToPriceSummary = function() {
return Mighty.scrollTo(this.ui.priceSummaryContainer.offset().top, 1e3);
}, o.prototype._scrollToFooterPlans = function() {
return Mighty.scrollTo(this.ui.aboutPageFooterPlansContainer.offset().top, 1e3);
}, o.prototype._shouldShowPurchaseSummary = function() {
return this.options.showPurchaseSummary && this.model.hasStripePlan();
}, o.prototype._handleCurrencyChanged = function() {
return this.stopListening(M.network.payments.availableCurrencies, "currencyChanged", this._handleCurrencyChanged), 
this.reRender();
}, o;
}(Mighty.CommunitiesApp.AboutBase);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AboutBundleLandingPage = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/about/about_bundle_landing_page", 
o.prototype.className = "community-about community-about-bundle-landing-page", o.prototype.withGrayBackground = !1, 
o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
productAvatarSize:M.isPhoneSize ? "small" :"medium",
hostsAvatarSize:M.isPhoneSize ? "medium" :"large",
additonalDescriptionClasses:"with-border-on-responsive",
showPlansCarousel:!1,
additionalPresenceBarClasses:"display-flex justify-content-center"
});
}, o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.BundleLandingPageApp.Banner({
model:this.model
}), this.listenTo(t, "bundleBuy:click", this._handleBannerBuyButtonClick), t;
}, o.prototype._showHeaderRegion = function() {
var t;
return t = new Mighty.Views.BundleLandingPageHeader({
model:this.model
}), this.headerRegion.show(t);
}, o.prototype._handleBannerBuyButtonClick = function() {
return this._scrollToPriceSummary();
}, o.prototype._onChangeScreenSize = function() {
return this.options.hostsAvatarSize = M.isPhoneSize ? "small" :"large", this.options.productAvatarSize = M.isPhoneSize ? "small" :"medium", 
this._showHostsBarRegion(), this._showProductsList();
}, o;
}(e.AboutBundle);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(o, n, i, r, s, a) {
return o.AboutSpace = function(o) {
function n() {
return this._showWelcomePosts = t(this._showWelcomePosts, this), this._handleBuyButtonClick = t(this._handleBuyButtonClick, this), 
n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.prototype.template = "communities/about/about_space", n.prototype.className = function() {
return n.__super__.className.apply(this, arguments) + " community-about-space";
}, n.prototype.withGrayBackground = !0, n.prototype.flyoutAdditionalClasses = "about-flyout", 
n.prototype.ui = function() {
return a.extend(n.__super__.ui.apply(this, arguments), {
welcomePosts:".welcome-posts",
aboutPageFooterPlansContainer:".about-page-footer-container"
});
}, n.prototype.regions = function() {
return a.extend(n.__super__.regions.apply(this, arguments), {
welcomePostsRegion:{
selector:".welcome-posts-region",
regionType:Mighty.Views.SelfHidingRegion
},
aboutCourseTableOfContentsRegion:".about-course-table-of-contents-region"
});
}, n.prototype.defaultOptions = function() {
return a.extend(n.__super__.defaultOptions.apply(this, arguments), {
showTextMeApp:!0,
showMembershipInfo:!0,
showHosts:!0
});
}, n.prototype.initialize = function() {
return this.options.showPlansCarousel ? this.bundlesCollection = this.model.suggestedSpaceBundles :void 0;
}, n.prototype.serializeData = function() {
return a.extend(n.__super__.serializeData.apply(this, arguments), {
show_welcome_posts:this._shouldShowWelcomePost(),
show_text_me_app:this.options.showTextMeApp,
show_plans_carousel:this._shouldShowPlansCarousel(),
show_hosts:this.options.showHosts,
show_course_table_of_contents:this.model.isCourse()
});
}, n.prototype.onShow = function() {
return n.__super__.onShow.apply(this, arguments), this._showSpacePlansCarousel(), 
this._showHostsBarRegion(), this._showInfo(this.model), this._showPrivacyInfo(this.model), 
this._getWelcomePosts(), this._showCourseTableOfContents(), this._shouldShowPlansCarousel() && this.$el.addClass("without-padding-bottom"), 
this.listenTo(M.network.payments.availableCurrencies, "currencyChanged", this._handleCurrencyChanged);
}, n.prototype.getFlyoutBarView = function() {
var t;
return this._needsToBuy() ? (t = new Mighty.Views.AboutSpaceBar({
model:this.model,
enablePrimaryButton:this.model.hasSuggestedPlan(),
primaryButtonText:this._buyButtonLabel()
}), this.listenTo(t, "primaryButtonClick", this._handleBuyButtonClick), t) :new Mighty.Views.AboutSpaceBar({
model:this.model
});
}, n.prototype._shouldShowPlansCarousel = function() {
return M.currentUser.isLoggedIn() && !this.model.currentUserIsMember();
}, n.prototype._shouldShowWelcomePost = function() {
return this.model.canViewContent() && M.network.isEnabledBillingFeature("pin_posts");
}, n.prototype._showHeaderRegion = function() {
var t;
return t = new Mighty.Views.AboutSpaceHeader({
enableActions:this.options.enableActions,
availableForSale:this._availableForSale(),
model:this.model,
showDescription:!1,
showDetails:!1,
showMembershipInfo:this.options.showMembershipInfo
}), this.listenTo(t, "buyButtonClick", this._handleBuyButtonClick), this.headerRegion.show(t);
}, n.prototype._needsToBuy = function() {
return M.currentUser.isLoggedIn() && this.model.isPaid() && !this.model.currentUserIsMember();
}, n.prototype._buyButtonLabel = function() {
return trl("Choose");
}, n.prototype._availableForSale = function() {
return this.options.enableActions && (!this.model.isPaid() || this.model.hasSuggestedPlan());
}, n.prototype._handleBuyButtonClick = function() {
return M.promptToJoinIfNonMember() ? void 0 :this._scrollToPlansCarousel();
}, n.prototype._scrollToPlansCarousel = function() {
return Mighty.scrollTo(this.ui.plansCarouselContainer.offset().top, 1e3);
}, n.prototype._showHostsBarRegion = function() {
return this.options.showHosts ? this.hostsBarRegion.show(new Mighty.CommunitiesApp.PresenceBar({
model:this.model,
collection:this.model.hosts,
seeMoreUrl:this.model.pageLink("hosts"),
showFollow:!1,
showChat:!1,
maxFlexibleItems:3
})) :void 0;
}, n.prototype._setupAboutDescriptionExpansion = function() {
return this.aboutDescriptionRegion.show(new Mighty.Views.AboutDescription({
model:this.model.getOwningSpace()
}));
}, n.prototype._showCourseTableOfContents = function() {
return this.model.isCourse() && this.model.isEnabledFeature("content_preview") ? this.aboutCourseTableOfContentsRegion.show(new Mighty.Views.AboutCourseTableOfContents({
model:this.model,
actionButtonLabel:this._needsToBuy() && this._availableForSale() ? this._buyButtonLabel() :"",
actionButtonCallback:this._handleBuyButtonClick
})) :void 0;
}, n.prototype._getWelcomePosts = function() {
return this._shouldShowWelcomePost() ? this.model.discoveryGroups.load("welcome", this._showWelcomePosts) :void 0;
}, n.prototype._showWelcomePosts = function(t) {
var e;
if (!this.isClosed) return t.isLoaded() && 0 === t.items.length ? this.ui.welcomePosts.hide() :(e = new Mighty.Views.DiscoveryGroup({
model:t
}), this.welcomePostsRegion.show(e));
}, n.prototype._showSpacePlansCarousel = function() {
return this.model.currentUserIsMember() ? void 0 :this._showPlansCarousel();
}, n.prototype._handleCurrencyChanged = function(t) {
var e;
if (this.model.suggestedPlans && (null != (e = this.model.suggestedPlan) ? e.getCurrency() :void 0) !== t.toLowerCase()) return this.model.setSuggestedPlanByCurrency(t), 
this._showHeaderRegion();
}, n;
}(Mighty.CommunitiesApp.AboutBase);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AboutBundleProduct = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = function() {
return o.__super__.className.apply(this, arguments) + " community-about-bundle-product";
}, o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
enableActions:!1,
showTextMeApp:!1,
showPlansCarousel:!1,
showMembershipInfo:!1,
customBundleBackLink:null
});
}, o.prototype.getFlyoutBarView = function() {
return new Mighty.Views.AboutBundleBar({
model:this.options.bundle,
showTitleView:!0,
enablePrimaryButton:!1,
customBundleBackLink:this.options.customBundleBackLink
});
}, o;
}(Mighty.CommunitiesApp.AboutSpace);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(o, n, i, r, s, a) {
return o.AboutBundleFlyoutLayout = function(o) {
function n() {
return this._getDefaultFlyoutBar = t(this._getDefaultFlyoutBar, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.prototype.className = "about-flyout-layout about-bundle-flyout-layout", 
n.prototype._getDefaultFlyoutBar = function(t) {
var e;
return e = this.tabOptions.model, new Mighty.Views.AboutBundleBar({
model:e,
enablePrimaryButton:this.tabOptions.enableActions
});
}, n.prototype._getViewForTab = function(t, e) {
var o;
switch (null == e && (e = {}), t) {
case "bundle":
return o = new Mighty.CommunitiesApp.AboutBundle(e);

case "products":
return new Mighty.CommunitiesApp.Views.BundleProductsListLayout(e);

case "bundle_product":
return new Mighty.CommunitiesApp.AboutBundleProduct(a.extend(e, {
bundle:e.model,
model:e.space
}));

case "buy":
return new Mighty.CommunitiesApp.Views.BundleBuyLayout(e);
}
}, n;
}(Mighty.Views.BaseFlyoutLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AboutSpaceFlyoutLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "about-flyout-layout about-space-flyout-layout", 
o.prototype._getDefaultFlyoutBar = function(t) {
return new Mighty.Views.AboutSpaceBar({
model:this.model
});
}, o.prototype._getViewForTab = function(t, e) {
var o;
return o = new Mighty.CommunitiesApp.AboutSpace(s.extend(e, {
model:this.model
}));
}, o;
}(Mighty.Views.BaseFlyoutLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return e.AnnouncementLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/announcement/layout", o.prototype.className = "announcement-page mighty-max-content-width", 
o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), this.post = this.model.getPost(), {
relative_time:M.TimeFormatHelper.relativePastShort(this.model.get("created_at")),
text:this.model.get("body"),
announcement_title:this._buildTitle(),
reply_link:this._getUserId() !== M.currentUser.id ? M.URLHelper.makeLinkWithQuerystring("community_new_chat_path", {
user_id:this._getUserId()
}) :void 0,
is_other_user_id:!0,
is_post:!!this.post,
member_link:M.URLHelper.makeLink("community_member_path", this._getUserId()),
member_deep_link:M.mobileLinkHelper.makeLink("community_member_path", this._getUserId()),
post_link:this.post ? M.URLHelper.makeLink("community_post_path", this.post) :void 0,
display_name:this.post ? trl("See {display_name}", {
display_name:this.post.displayName()
}) :void 0
});
}, o.prototype._buildTitle = function() {
return this.post ? tr("[internalLink: {text}]", {
text:this.post.getTitle(),
internalLink:{
href:M.URLHelper.makeLink("community_post_path", this.post),
"class":"navigate"
}
}) :trl("Your Host {name} sent you a message", {
name:this.model.get("user").first_name
});
}, o.prototype._getUserId = function() {
return this.model.get("user").id;
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AnnouncementFlyoutLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype._getViewForTab = function(t, e) {
if (null == e && (e = {}), !e.announcement) throw "Must have options.announcement";
return new Mighty.CommunitiesApp.Views.AnnouncementLayout({
model:e.announcement
});
}, o.prototype._getDefaultFlyoutBar = function(t) {
return new Mighty.Views.AnnouncementBar({
model:t.model
});
}, o;
}(Mighty.Views.BaseFlyoutLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AnnouncementsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/announcements/layout", o.prototype.className = "community-announcements-layout", 
o.prototype.regions = {
listRegion:"#announcements-list-region"
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.PostList({
collection:this.model.announcementPosts,
emptyViewText:trl("Looks like there are no Mighty Announcements here yet.")
}));
}, o.prototype._getTitleBarView = function() {
return new Mighty.Views.TitleBar({
title:trl("Mighty Announcements"),
enableSecondaryButton:M.network.currentUserIsHost(),
secondaryButtonLink:M.URLHelper.makeLinkPerSpace("community_new_announcement_post_path", this.model)
});
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PostsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/posts_layout", o.prototype.id = "posts-layout", 
o.prototype.preserveScrolling = !0, o.prototype.regions = {
contentbarRegion:"#contentbar-region",
listRegion:"#list-region"
}, o.prototype.defaultOptions = function() {
return {
enablePrimaryButton:!1,
primaryButtonLink:null,
primaryButtonText:trl("Manage"),
dayIndex:null
};
}, o.prototype.onShow = function() {
return this._showGridBar(), this._showList();
}, o.prototype._getNavTab = function() {
if (this.options.navTab) return this.options.navTab;
switch (this.options.tab) {
case "events":
return "upcoming-events";

case "scheduled-posts":
return "all";
}
}, o.prototype._getTitleBarView = function() {
return this.options.title ? new Mighty.Views.TitleBar({
title:this.options.title,
enablePrimaryButton:this.options.enablePrimaryButton,
primaryButtonLink:this.options.primaryButtonLink,
primaryButtonText:this.options.primaryButtonText
}) :void 0;
}, o.prototype._showGridBar = function() {
var t;
return "members" === this.options.tab ? t = new M.SpaceViews.Grid.MemberGridBar({
model:this.model
}) :"events" === this.options.tab ? t = new Mighty.CommunitiesApp.EventsFilterBar({
navTab:this._getNavTab(),
model:this.model,
dayIndex:this.options.dayIndex,
post:this.options.post,
filterState:this.options.filterState
}) :"scheduled-posts" === this.options.tab && (t = new Mighty.CommunitiesApp.ScheduledPostsFilterBar(s.extend(this.options, {
navTab:this._getNavTab()
}))), t ? this.contentbarRegion.show(t) :void 0;
}, o.prototype._showList = function() {
var t, e;
return t = function() {
if ("events" !== this.options.tab) return "drafts" === this.options.tab ? trl("There aren't any drafts in here just yet.") :"questions" === this.options.tab ? trl("There aren't any Questions in here just yet.") :"polls" === this.options.tab ? trl("There aren't any Polls in here yet.") :"articles" === this.options.tab ? trl("There aren't any Articles in here yet.") :trl("There aren't any Posts in here just yet.");
switch (this._getNavTab()) {
case "nearby-events":
return trl("Looks like there are no Events near you.");

case "past-events":
return trl("There are no past Events.");

case "yours-events":
return trl("You don't have any Events.");

case "upcoming-events":
return trl("Looks like there aren't any upcoming Events.");

case "day-events":
return trl("Looks like there are no events on this day.");

default:
return trl("Looks like there are no events.");
}
}.call(this), e = new Mighty.Views.PostList({
collection:this.collection,
emptyViewText:t
}), this.listRegion.show(e);
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.ArticlesLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.Views.TitleBar({
superTitle:this.model.isNetwork() ? void 0 :this.model.getTitle(),
title:trl("Articles"),
enablePrimaryButton:M.network.currentUserIsHostOrModerator(),
enableSecondaryButton:M.network.currentUserCanCreateArticles(),
primaryButtonLink:M.URLHelper.makeLink("community_content_tools_settings_path"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:this.model.pageLink("new-post")
}), this.model.isNetwork() || this.listenTo(this.model.getMainSilo(), "change:name", function() {
return this.trigger("titleBar:reShow");
}), t;
}, o;
}(e.PostsLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return this.BundleBuyLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/bundle_buy_layout", o.prototype.className = "bundle-buy-layout community-about", 
o.prototype.preserveScrolling = !1, o.prototype.regions = {
accordionFormRegion:".accordion-form-region"
}, o.prototype.initialize = function() {
return this.customer = M.network.memberBilling.customer, this.options.selectedPlanId ? this.model.selectPlanByID(this.options.selectedPlanId, {
silent:!0
}) :this.model.suggestedPlan && (this.model.selectedPlan = this.model.suggestedPlan), 
this.listenTo(M.network.payments.availableCurrencies, "currencyChanged", function(t) {
return function(e) {
return t._showPaymentsAccordionForm();
};
}(this));
}, o.prototype.serializeData = function() {
return {
header_title:this._getHeaderTitle()
};
}, o.prototype.onShow = function() {
return this.customer.setupCard(), this._showPaymentsAccordionForm();
}, o.prototype.getFlyoutBarView = function() {
return new Mighty.Views.AboutBundleBar({
model:this.model,
showTitleView:!0,
enablePrimaryButton:!1,
customBundleBackLink:this.options.customBundleBackLink
});
}, o.prototype._getHeaderTitle = function() {
return this.model.getSelectedOrFirstPlan().canStartFreeTrial() ? trl("Start Free Trial") :trl("Payment and Review");
}, o.prototype._showPaymentsAccordionForm = function() {
var t;
if (this.model.selectedPlan) return t = new Mighty.Models.MemberBilling.PurchaseBundlePlanCard(null, {
space:M.network,
bundle:this.model
}), this.accordionFormRegion.show(new Mighty.Views.InternalPaymentsAccordionForm({
model:t,
selectedPlanId:this.options.selectedPlanId,
bundle:this.model,
customer:this.customer
}));
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return this.BundleProductsListLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/bundle_products_list_layout", 
o.prototype.className = "bundle-products-list-layout community-about no-header", 
o.prototype.withGrayBackground = !0, o.prototype.defaultOptions = {
enableActions:!0,
customBundleBackLink:null
}, o.prototype.regions = {
bundleProductsListRegion:".bundle-products-list-region"
}, o.prototype.onShow = function() {
return this._showMightyProductsList();
}, o.prototype._showMightyProductsList = function() {
var t;
return t = new Mighty.Views.MightyProductsList({
model:this.model
}), this.bundleProductsListRegion.show(t);
}, o.prototype.getFlyoutBarView = function() {
return new Mighty.Views.AboutBundleBar({
model:this.model,
showTitleView:!0,
enableCloseButton:!1,
customBundleBackLink:this.options.customBundleBackLink
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Calendar", function(e, o, n, i, r, s) {
return e.BaseCalendarLayout = function(e) {
function o() {
this.listenTo(this, "show", this._onShow), this.listenTo(M.eventBus, "navigating", this._closePopup), 
o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/events_calendar_layout", o.prototype.regions = function() {
return {
calendarActionsRegion:".calendar-icon-region"
};
}, o.prototype.ui = {
todayButton:".today-button",
fullPageCalendar:".mighty-full-page-calendar",
calendarList:".mighty-calendar-list",
weekOption:"#calendar-week-option",
monthOption:"#calendar-month-option",
calendarToggleIcon:".calendar-toggle-icon"
}, o.prototype.events = {
"click @ui.todayButton":"_handleTodayButtonClick",
"change @ui.weekOption":"_handleWeekOptionChange",
"change @ui.monthOption":"_handleMonthOptionChange",
"click @ui.calendarToggleIcon":"_handleCalendarToggleIconClick"
}, o.prototype.initialize = function() {
return this.listenTo(this.collection, "postUpdatedByCurrentUser", this._handleCollectionPostUpdated);
}, o.prototype.serializeData = function() {
return {
collapse_button_link:this._getCollapseButtonLink()
};
}, o.prototype._getTitleBarView = function() {
throw "Must be implemented in the derived class";
}, o.prototype._onShow = function() {
return this._setAdditionalClasses(), this._showAppropriateCalendar();
}, o.prototype._closePopup = function() {
return r(".mbsc-cal-events-popup").addClass("hide");
}, o.prototype._getCollapseButtonLink = function() {
return this.model.pageLink("events");
}, o.prototype._handleTodayButtonClick = function() {
return this.fullPageCalendarInstance.navigate(M.TimeHelper.getCurrentDate()), this.$(".mbsc-cal-month-picker").addClass("mbsc-cal-h");
}, o.prototype._handleCalendarToggleIconClick = function(t) {
return t.preventDefault(), this.hideTooltips();
}, o.prototype._showAppropriateCalendar = function() {
return M.isPhoneSize ? this._showResponsiveCalendar({
type:"month"
}) :this._showFullWidthCalendar();
}, o.prototype._onChangeScreenSize = function() {
return this._showAppropriateCalendar();
}, o.prototype._showCalendarActions = function() {
throw "Must be implemented in the derived class";
}, o.prototype._showFullWidthCalendar = function(t) {
var e;
return null == t && (t = {}), e = {
calendarHeight:800,
calendarType:"month",
calendarLabels:!0,
calendarPopOver:!0,
maxLabels:5,
weeks:5,
defaultValue:t.defaultValue,
eventsListLoadedCallback:function(t) {
return function() {
var e;
return t._showCalendarActions(), t.showTooltips(null, {
container:"body"
}), e = t.$(".mbsc-cal-day-diff").find(".mbsc-cal-txt.mbsc-cal-unset-background:not(.mbsc-cal-past-event)"), 
e.each(function(t, e) {
var o;
return o = r(this).attr("color"), r(this).addClass("mbsc-cal-event-with-opacity"), 
r(this).css("background", M.Util.hexToRgba(o, 50));
});
};
}(this)
}, this.fullPageCalendarInstance = M.CalendarHelper.setupCalendar(this.ui.fullPageCalendar, "full", this.collection, e);
}, o.prototype._setAdditionalClasses = function() {
return r("body").addClass("full-width-page full-width-title-bar");
}, o.prototype._handleWeekOptionChange = function() {
return this._showResponsiveCalendar({
type:"week"
});
}, o.prototype._handleMonthOptionChange = function() {
return this._showResponsiveCalendar({
type:"month"
});
}, o.prototype._showResponsiveCalendar = function(t) {
var e, o;
return null == t && (t = {}), this.$(".mighty-calendar-list-wrapper").addClass("is-fetching"), 
o = t.type || "month", e = {
calendarType:o,
eventListType:o,
weeks:"week" === o ? 1 :5,
defaultValue:t.defaultValue,
eventsListLoadedCallback:function(t) {
return function() {
return t.$(".mighty-calendar-list-wrapper").removeClass("is-fetching"), t._showCalendarActions();
};
}(this)
}, this.responsiveCalendar = M.CalendarHelper.setupSmallCalendar(this.ui.calendarList, "responsive", this.collection, e);
}, o.prototype._handleCollectionPostUpdated = function() {
var t, e;
return this.responsiveCalendar && (null != (t = this.responsiveCalendar) && t.destroy(), 
this._showResponsiveCalendar({
type:"month",
defaultValue:this.collection.monthStart
})), this.fullPageCalendarInstance ? (null != (e = this.fullPageCalendarInstance) && e.destroy(), 
this._showFullWidthCalendar({
defaultValue:this.collection.monthStart
})) :void 0;
}, o.prototype._showCalendarActionsForMobile = function() {
return M.MobileApps.setupHeaderButton({
icon:"more",
enabled:!0,
callback:function(t) {
return function() {
return M.MobileApps.showMultiMenu([ {
id:"all_events",
text:trl("Show All Events"),
callback:function() {
return Mighty.navigate(M.URLHelper.makeLink("community_calendar_path"), {
trigger:!0
});
}
}, {
id:"my_events",
text:trl("Show My Events Only"),
callback:function() {
return Mighty.navigate(M.URLHelper.makeLinkWithQuerystring("community_calendar_path", {
mine:!0
}), {
trigger:!0
});
}
}, {
id:"sync_calendar",
text:trl("Sync to My Calendar \u25be"),
callback:function() {
return t._showSyncToCalendarMobileOptions();
}
} ]);
};
}(this)
});
}, o.prototype._showSyncToCalendarMobileOptions = function() {
return M.MobileApps.showMultiMenu([ {
id:"sync_my_events",
text:trl("Sync My RSVPs"),
callback:function(t) {
return function() {
return M.MobileApps.openInBrowser(t.model.currentUserMembership.getCalendarLink(!1, M.isAndroidApp));
};
}(this)
}, {
id:"sync_all_events",
text:trl("Sync All Events"),
callback:function(t) {
return function() {
return M.MobileApps.openInBrowser(t.model.currentUserMembership.getCalendarLink(!0, M.isAndroidApp));
};
}(this)
} ]);
}, o.prototype._navigateToFirstEventIfNeeded = function() {
var t;
if (this.model.get("is_recurring")) return t = this.model.get("event_instance").starts_at, 
M.isPhoneSize ? this.responsiveCalendar.navigate(t) :this.fullPageCalendarInstance.navigate(t);
}, o.prototype.onClose = function() {
return r("body").removeClass("full-width-page full-width-title-bar");
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Calendar", function(e, o, n, i, r, s) {
return e.EventCalendarLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.include(Mighty.Views.FlexSpacesHelper), o.prototype._getCollapseButtonLink = function() {
return this.model.getOwningSpace().pageLink("events");
}, o.prototype._getTitleBarView = function() {
var t, e;
return M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :(t = this.model.getOwningSpace(), 
e = new Mighty.Views.TitleBar({
title:this.model.getTitle(),
enablePrimaryButton:t.currentUserIsHostOrModerator() && !M.isMightyMobileApp,
enableSecondaryButton:t.currentUserCanCreateEvents() && !M.isMightyMobileApp,
primaryButtonLink:t.pageLink("settings/content-tools"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:t.pageLink("new-event"),
drillDownContextLabel:this.model.isRecurringEvent() ? this.model.getRecurrenceRuleText() :void 0,
drillDownContextLink:this.model.pageLink()
}), this.model.getOwningSpace().isNetwork() || this.listenTo(this.model.getOwningSpace().getMainSilo(), "change:name", function(t) {
return function() {
return t.trigger("titleBar:reShow");
};
}(this)), e);
}, o.prototype.onShow = function() {
return this._navigateToFirstEventIfNeeded();
}, o.prototype._showCalendarActions = function() {
return this.isClosed ? void 0 :M.isMightyMobileApp ? this._showCalendarActionsForMobile() :this.calendarActionsRegion.show(new Mighty.Views.CalendarActions({
model:this.model
}));
}, o;
}(Mighty.CommunitiesApp.Calendar.BaseCalendarLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Calendar", function(e, o, n, i, r, s) {
return e.EventsCalendarLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.include(Mighty.Views.FlexSpacesHelper), o.prototype._getTitleBarView = function() {
var t;
return M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :(t = new Mighty.Views.TitleBar({
title:trl("Events"),
enablePrimaryButton:this.model.currentUserIsHostOrModerator() && !M.isMightyMobileApp,
enableSecondaryButton:this.model.currentUserCanCreateEvents() && !M.isMightyMobileApp,
primaryButtonLink:this.model.pageLink("settings/content-tools"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:this.model.pageLink("new-event"),
link:M.URLHelper.makeLink("community_events_path"),
additionalClasses:"calendar-title-bar"
}), this.model.isNetwork() || this.listenTo(this.model.getMainSilo(), "change:name", function(t) {
return function() {
return t.trigger("titleBar:reShow");
};
}(this)), t);
}, o.prototype._showCalendarActions = function() {
return this.isClosed ? void 0 :M.isMightyMobileApp ? this._showCalendarActionsForMobile() :this.calendarActionsRegion.show(new Mighty.Views.CalendarActions({
model:this.model,
buttonClass:"phone-hide icon-settings-24 settings-icon mighty-btn-icon mighty-btn-icon-grey-5"
}));
}, o;
}(Mighty.CommunitiesApp.Calendar.BaseCalendarLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return this.CirclesLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/spaces_layout", o.prototype.className = "container-spaces-all", 
o.prototype.regions = {
filterBarRegion:".filter-bar-region",
bundlePlansRegion:".bundle-plans-region",
listRegion:".list-region"
}, o.prototype.initialize = function() {
return this.navTab = this.options.navTab || this._getDefaultTab(), this.includeHostTabs = this.model.currentUserIsHost();
}, o.prototype.onShow = function() {
return this._showFilterRegion(), this._showListAndPlansCarouselRegion();
}, o.prototype._showFilterRegion = function() {
return this.filterBarRegion.show(new Mighty.CommunitiesApp.CirclesFilterBar({
model:this.model,
navTab:this.navTab,
filterState:this.options.filterState,
includeHostTabs:this.includeHostTabs
}));
}, o.prototype._showListAndPlansCarouselRegion = function() {
return "new-groups" === this.navTab ? (this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.newCircles,
emptyViewText:tr("There aren't any {pluralized_circle_silo_name}!", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})), this._updateTitleBarWhenLoaded(this.model.newCircles)) :"all-groups" === this.navTab ? (this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:new Mighty.Models.MemberFilteredAllCircles(null, {
collection:this.model.allCircles
}),
emptyViewText:tr("There aren't any {pluralized_circle_silo_name}!", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})), this._updateTitleBarWhenLoaded(this.model.allCircles)) :"top-groups" === this.navTab ? (this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.topCircles,
emptyViewText:tr("There aren't any {pluralized_circle_silo_name}!", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})), this._updateTitleBarWhenLoaded(this.model.topCircles)) :"groups-near-you" === this.navTab ? (this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.circlesNearYou,
emptyViewText:tr("Darn. There aren\u2019t any {pluralized_circle_silo_name} near you yet.", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})), this._updateTitleBarWhenLoaded(this.model.circlesNearYou)) :"your-groups" === this.navTab ? this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.userCircles,
emptyViewText:tr("You\u2019re just getting started!")
})) :"member-created-groups" === this.navTab && this.includeHostTabs ? this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.memberCreatedCircles,
emptyViewText:tr("There are no {pluralized_circle_silo_name} created by members yet.", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})) :"inactive-groups" === this.navTab && this.includeHostTabs ? this.listRegion.show(new Mighty.Views.CircleList({
model:this.model,
collection:this.model.inactiveCircles,
emptyViewText:tr("There are no inactive {pluralized_circle_silo_name}.", {
pluralized_circle_silo_name:M.network.siloPluralActualName("circle")
})
})) :console.error("navTab " + this.navTab + " not found");
}, o.prototype._getDefaultTab = function() {
return M.network.currentUserHasCircles() ? "your-groups" :"all-groups";
}, o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.Views.TitleBar({
title:M.network.siloPluralName("circle"),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableSecondaryButton:M.network.canCreateCommunityCircles(),
enableActionRegion:M.network.canCurrentUserSelectCurrency(),
primaryButtonLink:M.URLHelper.makeLink("community_circles_settings_path"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:M.URLHelper.makeLink("community_new_circle_path"),
actionView:this._getActionView()
}), this.listenTo(M.network.silo("circle"), "change:plural_name", function() {
return this.trigger("titleBar:reShow");
}), t;
}, o.prototype._getActionView = function() {
return this._shouldShowCurrencySelectionDropdown() ? new Mighty.Views.AvailableCurrenciesDropdown({
collection:M.network.payments.availableCurrencies
}) :void 0;
}, o.prototype._shouldShowCurrencySelectionDropdown = function() {
var t;
return "all-groups" !== (t = this.navTab) && "top-groups" !== t && "new-groups" !== t && "groups-near-you" !== t ? !1 :M.network.canCurrentUserSelectCurrency() ? [ this.model.allCircles, this.model.topCircles, this.model.newCircles, this.model.circlesNearYou ].some(function(t) {
return function(t) {
return !t.isEmpty();
};
}(this)) :!1;
}, o.prototype._updateTitleBarWhenLoaded = function(t) {
return t.loaded ? this.trigger("titleBar:reShow") :this.listenToOnce(t, "fetch:success", function(t) {
return function() {
return t.trigger("titleBar:reShow");
};
}(this));
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.AnalyticsContentbar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "analytics-contentbar", o.prototype.events = {
"click .content-bar-help-button":"_handleHelpButtonClick"
}, o.prototype._setupTabs = function() {
return this.addNavTab("overview", trl("Overview"), trl("Overview"), M.URLHelper.makeLink("community_analytics_path", "overview")), 
this.addNavTab("posts", trl("Post Activity"), trl("Post Activity"), M.URLHelper.makeLink("community_analytics_path", "posts")), 
this.addNavTab("members", trl("Member Activity"), trl("Member Activity"), M.URLHelper.makeLink("community_analytics_path", "members"));
}, o.prototype._handleHelpButtonClick = function(t) {
return t.preventDefault(), t.stopPropagation(), Mighty.CommunitiesApp.ModalManager.showFullPage(new this.options.questionsLayoutView({
model:this.model
}));
}, o;
}(Mighty.Views.Contentbar.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.InviteContentbar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "invite-grid-bar", o.prototype.initialize = function() {
return this.listenTo(this.model.inviteStats, "change:member_request_count", this._handleMemberRequestCountChange);
}, o.prototype._setupTabs = function() {
return this.addNavTab("invite", this._getInviteLabel(), this._getInviteLabel(), this._getInviteURL()), 
this.addNavTab("in-progress", this._getInProgressLabel(), this._getInProgressLabel(), this._getInProgressURL()), 
this.model.requestApprovalToJoin() && this.model.currentUserIsHostOrModerator() ? this.addNavTab("requests", this._getRequestsLabel(), this._getRequestsLabel(), this._getRequestsURL()) :void 0;
}, o.prototype._onChangeScreenSize = function() {
return this.clearNavTabs(), this.reRender();
}, o.prototype._handleMemberRequestCountChange = function() {
return this.clearNavTabs(), this.reRender();
}, o.prototype._getInviteLabel = function() {
return trl("Invite");
}, o.prototype._getInProgressLabel = function() {
return trl("Sent Invites");
}, o.prototype._getRequestsLabel = function() {
var t, e;
return e = M.isPhoneSize ? trl("Requests") :trl("Requests to Join"), (t = this.model.inviteStats.get("member_request_count")) > 0 && (e += "<span class='request-count'>" + t + "</span>"), 
e;
}, o.prototype._getInviteURL = function() {
return this.options.isSettingsPage ? this.model.pageLink("settings/invite") :this.model.pageLink("invite");
}, o.prototype._getInProgressURL = function() {
return this.options.isSettingsPage ? this.model.pageLink("settings/invite/in-progress") :this.model.pageLink("invite/in-progress");
}, o.prototype._getRequestsURL = function() {
return this.options.isSettingsPage ? this.model.pageLink("settings/invite/requests") :this.model.pageLink("invite/requests");
}, o.prototype._mapSelectedTab = function(t) {
return "invite" === t || "in-progress" === t || "requests" === t ? t :"invite";
}, o;
}(Mighty.Views.Contentbar.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.LiveSpaceContentbar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "live-space-contentbar", o.prototype.ui = function() {
return {
participantsTab:"#participants-content-bar-tab"
};
}, o.prototype.initialize = function() {
return this.listenTo(this.model, "change:member_count", this._handleMemberCountChanged);
}, o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
allowMultiselect:!1
});
}, o.prototype._setupTabs = function() {
return this.addNavTab("chat", trl("Chat"), trl("Chat"), null, function(t) {
return function() {
return t.trigger("liveSpaceContentBarTab:clicked", "chat");
};
}(this)), this.addNavTab("participants", this._getParticipantsTabText(), this._getParticipantsTabText(), null, function(t) {
return function() {
return t.trigger("liveSpaceContentBarTab:clicked", "participants");
};
}(this));
}, o.prototype._handleMemberCountChanged = function() {
return this.ui.participantsTab.text(this._getParticipantsTabText()), this.ui.participantsTab.attr("title", this._getParticipantsTabText());
}, o.prototype._getParticipantsTabText = function() {
return trl("{count} {count | Participant, Participants}", {
count:Humanize.intcomma(this.model.get("member_count"))
});
}, o;
}(Mighty.Views.Contentbar.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsContentbar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "payments-contentbar break-out-on-responsive", 
o.prototype._setupTabs = function() {
return this.addNavTab("plans", trl("Subscription Plans"), trl("Plans"), M.URLHelper.makeLink("community_settings_payments_path")), 
this.addNavTab("subscribers", trl("Subscribers"), trl("Subscribers"), M.URLHelper.makeLink("community_settings_payments_path", "subscribers"));
}, o;
}(Mighty.Views.Contentbar.Layout);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(o, n, i, r, s, a) {
return o.CourseContentLayout = function(o) {
function n() {
return this._handleJoined = t(this._handleJoined, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.prototype.template = "communities/courses/course_content_layout", 
n.prototype.className = "community-course-content-layout", n.prototype.regions = {
progressRegion:".coursework-progress-region",
courseworkRegion:{
selector:".coursework-region",
regionType:Mighty.Views.SlideRegion
}
}, n.prototype.initialize = function() {
return this.listenTo(M.eventBus, "userJoined", this._handleJoined), this.listenTo(this.model.currentUserProgress, "change:current", this._handleProgressChange);
}, n.prototype.onShow = function() {
return this._showProgress(), this._showCoursework();
}, n.prototype._showCoursework = function() {
var t;
return t = new Mighty.Views.CourseContentLayout({
model:this.model
}), this.courseworkRegion.show(t);
}, n.prototype._handleProgressChange = function() {
return this.model.hasProgress() ? this._showProgress() :this._showingProgress() ? this.progressRegion.currentView.closeRegion() :void 0;
}, n.prototype._showingProgress = function() {
var t;
return null != (t = this.progressRegion.currentView) ? t.isVisible() :void 0;
}, n.prototype._getTitleBarView = function() {
var t, e;
return this.model.isOwningSpace() && !this.model.currentUserIsMember() && (t = new Mighty.Views.JoinWidget({
model:this.model
})), e = new Mighty.Views.TitleBar({
superTitle:this._getSuperTitle(),
title:this._getTitle(),
subTitle:this._getSubTitle(),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableActionRegion:!0,
primaryButtonLink:this.model.settingsPageLink(),
primaryButtonText:trl("Manage"),
actionView:t
}), this.listenTo(M.network.silo("course"), "change:plural_name", function() {
return this.trigger("titleBar:reShow");
}), this.listenTo(this.model, "change:title", function() {
return this.trigger("titleBar:reShow");
}), e;
}, n.prototype._showProgress = function() {
return !this._showingProgress() && this.model.isCourse() && this.model.hasProgress() && this.model.currentUserIsMember() && !this.model.currentUserIsHost() ? this.progressRegion.show(new Mighty.Views.CourseProgress({
model:this.model.currentUserProgress
})) :void 0;
}, n.prototype._getSuperTitle = function() {
return this.model.isFeedDefaultTab() ? this.model.getTitle() :this.model.displayName();
}, n.prototype._getTitle = function() {
return this.model.isFeedDefaultTab() ? this.model.siloName("course_content") :this.model.getTitle();
}, n.prototype._getSubTitle = function() {
return this.model.isFeedDefaultTab() ? void 0 :this.model.getSubtitle();
}, n.prototype._handleJoined = function(t) {
return t === this.model.get("id") ? this.reRender() :void 0;
}, n;
}(n.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return this.CoursesLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/spaces_layout", o.prototype.className = "container-spaces-all", 
o.prototype.regions = {
filterBarRegion:".filter-bar-region",
bundlePlansRegion:".bundle-plans-region",
listRegion:".list-region"
}, o.prototype.initialize = function() {
return this.navTab = this.options.navTab || this._getDefaultTab(), this.includeHostTabs = this.model.currentUserIsHost();
}, o.prototype.onShow = function() {
return this._showFilterRegion(), this._showListAndPlansCarouselRegion();
}, o.prototype._showFilterRegion = function() {
return this.filterBarRegion.show(new Mighty.CommunitiesApp.CoursesFilterBar({
model:this.model,
navTab:this.navTab,
filterState:this.options.filterState,
includeHostTabs:this.includeHostTabs
}));
}, o.prototype._showListAndPlansCarouselRegion = function() {
return "new-courses" === this.navTab ? (this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.newCourses,
emptyViewText:tr("There aren't any {pluralized_course_silo_name}!", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})), this._updateTitleBarWhenLoaded(this.model.newCourses)) :"all-courses" === this.navTab ? (this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:new Mighty.Models.MemberFilteredAllCourses(null, {
collection:this.model.allCourses
}),
emptyViewText:tr("There aren't any {pluralized_course_silo_name}!", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})), this._updateTitleBarWhenLoaded(this.model.allCourses)) :"top-courses" === this.navTab ? (this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.topCourses,
emptyViewText:tr("There aren't any {pluralized_course_silo_name}!", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})), this._updateTitleBarWhenLoaded(this.model.topCourses)) :"courses-near-you" === this.navTab ? (this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.coursesNearYou,
emptyViewText:tr("Darn. There aren\u2019t any {pluralized_course_silo_name} near you yet.", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})), this._updateTitleBarWhenLoaded(this.model.coursesNearYou)) :"your-courses" === this.navTab ? this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.userCourses,
emptyViewText:tr("You\u2019re just getting started!")
})) :"member-created-courses" === this.navTab && this.includeHostTabs ? this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.memberCreatedCourses,
emptyViewText:tr("There are no {pluralized_course_silo_name} created by members yet.", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})) :"inactive-courses" === this.navTab && this.includeHostTabs ? this.listRegion.show(new Mighty.Views.CourseList({
model:this.model,
collection:this.model.inactiveCourses,
emptyViewText:tr("There are no inactive {pluralized_course_silo_name}.", {
pluralized_course_silo_name:M.network.siloPluralActualName("course")
})
})) :console.error("navTab " + this.navTab + " not found");
}, o.prototype._getDefaultTab = function() {
return M.network.currentUserHasCourses() ? "your-courses" :"top-courses";
}, o.prototype._showBundlePlansCarousel = function(t) {
return M.network.get("has_bundles") ? t.getFirstPageIfNeeded(function(e) {
return function() {
var o;
if (!e.isClosed && t.length > 0) return o = new Mighty.Views.BundlesGrid({
collection:t
}), e.bundlePlansRegion.show(o);
};
}(this)) :void 0;
}, o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.Views.TitleBar({
title:M.network.siloPluralName("course"),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableSecondaryButton:M.network.canCreateCommunityCourses(),
enableActionRegion:M.network.canCurrentUserSelectCurrency(),
primaryButtonLink:M.URLHelper.makeLink("community_courses_settings_path"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:M.URLHelper.makeLink("community_new_course_path"),
actionView:this._getActionView()
}), this.listenTo(M.network.silo("course"), "change:plural_name", function() {
return this.trigger("titleBar:reShow");
}), t;
}, o.prototype._getActionView = function() {
return this._shouldShowCurrencySelectionDropdown() ? new Mighty.Views.AvailableCurrenciesDropdown({
collection:M.network.payments.availableCurrencies
}) :void 0;
}, o.prototype._shouldShowCurrencySelectionDropdown = function() {
var t;
return M.network.canCurrentUserSelectCurrency() ? "all-courses" !== (t = this.navTab) && "top-courses" !== t && "new-courses" !== t && "courses-near-you" !== t ? !1 :[ this.model.allCourses, this.model.topCourses, this.model.newCourses, this.model.coursesNearYou ].some(function(t) {
return function(t) {
return !t.isEmpty();
};
}(this)) :!1;
}, o.prototype._updateTitleBarWhenLoaded = function(t) {
return t.loaded ? this.trigger("titleBar:reShow") :this.listenToOnce(t, "fetch:success", function(t) {
return function() {
return t.trigger("titleBar:reShow");
};
}(this));
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("Views", function(e, o, n, i, r, s) {
return e.EventMeetingLink = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "shared/modules/smart_link", o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
errorMessage:trl("Not a valid event URL"),
name:"event-meeting-link"
});
}, o.prototype.getData = function() {
return {
provider:this._getLinkProvider(),
event_link:this._getLink()
};
}, o.prototype._getIconImageLink = function(t) {
var e, o;
return this.trigger("inserted:" + (null != (e = this._getLinkProvider()) ? e.type :void 0) + "_link"), 
t(null, null != (o = this._getLinkProvider()) ? o.image_url :void 0);
}, o.prototype._getLinkProvider = function() {
return this.model.determineEventProviderByUrl(this._getLink());
}, o.prototype.showValidationTextError = function(t) {
return M.FormValidator.showTextError(null, t, !1, this.$el);
}, o;
}(Mighty.Views.SmartLink);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(o, n, i, r, s, a) {
return o.EventsLayout = function(o) {
function n() {
return this._handleDayChanged = t(this._handleDayChanged, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.include(Mighty.Views.FlexSpacesHelper), n.prototype.template = "communities/events_layout", 
n.prototype.ui = {
smallCalendar:".small-calendar"
}, n.prototype.initialize = function() {
return this.listenTo(this.collection, "postUpdatedByCurrentUser", this._handleCollectionPostUpdated);
}, n.prototype.serializeData = function() {
return a.extend(n.__super__.serializeData.apply(this, arguments), {
day_index:M.TimeHelper.dateTimeToIcsUtcFormat(M.TimeHelper.getCurrentDate())
});
}, n.prototype.onShow = function() {
return this._showGridBar(), this._showList(), this._showSmallCalendar(), this.showTooltips();
}, n.prototype._getTitleBarView = function() {
var t;
return M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :(t = new Mighty.Views.TitleBar({
superTitle:this.model.isNetwork() ? void 0 :this.model.getTitle(),
title:trl("Events"),
enablePrimaryButton:M.network.currentUserIsHostOrModerator() && this.model.isNetwork(),
enableSecondaryButton:this.model.currentUserCanCreateEvents(),
primaryButtonLink:M.URLHelper.makeLink("community_content_tools_settings_path"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:this.model.pageLink("new-event"),
link:this.model.pageLink("events")
}), this.model.isNetwork() || this.listenTo(this.model.getMainSilo(), "change:name", function() {
return this.trigger("titleBar:reShow");
}), t);
}, n.prototype._showSmallCalendar = function() {
var t, e;
if (!M.isDesktopSizeOrBelow) return null != (e = this.smallCalendarInstance) && e.destroy(), 
this.options.dayIndex && (t = M.TimeHelper.icsUtcFormatToDateTime(this.options.dayIndex)), 
this.smallCalendarInstance = M.CalendarHelper.setupSmallCalendar(this.ui.smallCalendar, null, this.model.calendarInstances, {
defaultValue:t,
onDayChangeCallback:this._handleDayChanged
});
}, n.prototype._handleDayChanged = function(t) {
return M.isPhoneSize ? void 0 :Mighty.navigate(this.model.pageLink("events", {
day_index:t
}), {
trigger:!0
});
}, n.prototype._handleCollectionPostUpdated = function() {
return this._showSmallCalendar();
}, n.prototype._onChangeScreenSize = function() {
return this._showSmallCalendar();
}, n;
}(o.PostsLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Feed", function(e, o, n, i, r, s) {
return e.FilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "feed-filter-bar", o.prototype._setupChangeListener = function() {
return this.listenTo(this.model, "change:enabled_features", this._setupAndShowTabsIfNeeded);
}, o.prototype._setupTabs = function() {
return this._addTab("everything", trl("Everything")), this._addTab("personal", trl("Personal Feed")), 
M.currentUser.isLoggedIn() && this._addTab("mine", trl("Your Activity")), this._addTab("by_hosts", trl("From Your Hosts")), 
M.network.isEnabledFeature("location") && this._addTab("near_me", trl("Near You")), 
this._addTab("unanswered", trl("Unanswered")), this.model.isEnabledFeature("posts") && this._addTab("posts", trl("Quick Posts")), 
this.model.isEnabledFeature("polls") && this._addTab("polls_and_questions", trl("Questions and Polls")), 
this.model.isEnabledFeature("articles") && this._addTab("articles", trl("Articles")), 
this.model.isEnabledFeature("events") ? this._addTab("events", trl("Events")) :void 0;
}, o.prototype._addTab = function(t, e) {
return this.addTab(t, this.model.feedLink(this.filterState.getMode(), s.uniq([ t ].concat(this.filterState.getFilters())), this.filterState.getSort()), e, e);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Feed", function(e, o, n, i, r, s) {
return e.FilterLayout = function(o) {
function n() {
return n.__super__.constructor.apply(this, arguments);
}
return t(n, o), n.prototype.className = "feed-filter-layout", n.prototype.filterBarView = e.FilterBar, 
n.prototype.initialize = function() {
return n.__super__.initialize.apply(this, arguments), this.listenTo(this.filterState, "reset", this.reRender);
}, n.prototype.defaultOptions = function() {
return s.extend(n.__super__.defaultOptions.apply(this, arguments), {
enableSort:!0,
preExpand:!1
});
}, n.prototype.filterBarOptions = function() {
return s.extend(n.__super__.filterBarOptions.apply(this, arguments), {
model:this.model
});
}, n;
}(Mighty.Views.BaseFilterLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Feed", function(e, o, n, i, r, s) {
return e.LiveSpacePreview = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/live_space_preview", o.prototype.className = "mighty-live-space-preview", 
o.prototype.regions = {
liveSpaceRegion:".live-space"
}, o.prototype.onShow = function() {
return this.liveSpaceRegion.renderReactComponent("LiveSpacePreview", {
liveSpace:this.model,
joinLiveSpaceCallback:function(t) {
return function() {
return M.promptToJoinIfNonMember({
id:t.model.getOwningSpaceId(),
spaceType:t.model.getOwningSpaceType()
}) ? void 0 :Mighty.navigate(t.model.pageLink(), {
trigger:!0
});
};
}(this)
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Feed", function(e, o, n, i, r, s) {
return e.LiveSpacePreviewCarousel = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/live_space_preview_carousel", 
o.prototype.className = "mighty-live-space-preview", o.prototype.regions = {
liveSpaceRegion:".live-space-carousel"
}, o.prototype.onShow = function() {
return this.liveSpaceRegion.renderReactComponent("LiveSpacePreviewCarousel", {
liveSpaces:this.collection,
joinLiveSpaceCallback:function(t) {
return function(t) {
return M.promptToJoinIfNonMember({
id:t.getOwningSpaceId(),
spaceType:t.getOwningSpaceType()
}) ? void 0 :Mighty.navigate(t.pageLink(), {
trigger:!0
});
};
}(this)
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityBillingPlanStarted = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_billing_plan_started", 
o.prototype.className = "community-billing-plan-started-container", o.prototype.ui = {
actionButton:".community-modal-action-button"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.defaultOptions = function() {
return {
subtitle:"",
actionButtonUrl:M.URLHelper.makeLink("community_checklist_settings_path"),
actionButtonText:trl("Go To The Mighty Checklist"),
addOnPlans:[]
};
}, o.prototype.initialize = function() {
return this.eventObjectId = this.options.eventObjectId;
}, o.prototype.serializeData = function() {
return {
subtitle:this.options.subtitle,
action_button_text:this.options.actionButtonText,
action_button_url:this.options.actionButtonUrl || "#",
has_add_ons:this._hasAddOns(),
has_engagement_boost:this._hasEngagementBoost()
};
}, o.prototype.onRender = function() {
return M.network.saveOnboardingData({
seen_free_trial_started_modal:!0
});
}, o.prototype._handleActionButtonClick = function(t) {
return this._trackClickAnalytics(), Mighty.closeModal();
}, o.prototype._hasAddOns = function() {
return !s.isEmpty(this.options.addOnPlans);
}, o.prototype._hasEngagementBoost = function() {
return this.options.addOnPlans.some(function(t) {
return t.isEngagementBoost();
});
}, o;
}(Mighty.Views.BaseTrackedModal);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityDesignModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_design", 
o.prototype.className = "community-design-modal modal-content", o.prototype.ui = {
actionButton:".community-design-modal-action-button",
videoPlaceholderImage:".modal-video-placeholder-image"
}, o.prototype.regions = {
videoRegion:".video-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.serializeData = function() {
return {
message:this._getMessage(),
action_button_text:trl("Claim My Spot in Community Design"),
phone_action_button_text:trl("Claim My Spot"),
action_button_url:this._getActionURL()
};
}, o.prototype.onShow = function() {
return this._trackViewAnalytics(), this._setupVideoPlayer();
}, o.prototype._handleActionButtonClick = function(t) {
return this._trackClickAnalytics();
}, o.prototype._getMessage = function() {
return moment().isBefore(moment("2021-03-22T08:00:00Z")) ? trl("We interrupt this moment to share something EXCITING launching March 23rd.") :moment().isBefore(moment("2021-03-26T08:00:00Z")) ? trl("We interrupt this moment to share something EXCITING launching this week.") :trl("We interrupt this moment in {network_title} to share something EXCITING we don't want you to miss.", {
network_title:M.network.getTitle()
});
}, o.prototype._getActionURL = function() {
return M.network.currentBillingPlan.isBusinessPlan() ? "https://hosts.mn.co/plans/126273?bundle_token=462364318e0e3bb4812e102a102a4632&utm_source=modal" :M.network.currentBillingPlan.isBuilderPlan() ? "https://hosts.mn.co/plans/126271?bundle_token=dba07bc481b9b2ca8336d0c968cd6857&utm_source=modal" :"https://hosts.mn.co/plans/126270?bundle_token=0ed425c60dbb5f7316785e74f8e3de17&utm_source=modal";
}, o.prototype._trackViewAnalytics = function() {
return M.Analytics.recordEvent("viewed modal", {
action:"view",
object:{
id:".community-design-course-modal",
type:"modal"
}
});
}, o.prototype._trackClickAnalytics = function() {
return M.Analytics.recordEvent("clicked modal button", {
action:"click",
object:{
id:".community-design-course-modal-action-button",
type:"modal"
}
});
}, o.prototype._setupVideoPlayer = function() {
return r.when(M.Util.getCachedScript(M.Settings.javascripts.videoBundle)).then(function(t) {
return function(e) {
var o;
return o = new Mighty.Views.VideoPlayer({
controlsEnabled:!0,
model:M.network,
videoUrl:M.Settings.modalVideos.communityDesign.videoUrl,
trackable:!0,
hideTrackableIcon:!0
}), t.listenToOnce(o, "video:played", t._handleVideoPlayed), t.listenToOnce(o, "video:trigger_completion", t._handleVideoCompleted), 
t.videoRegion.show(o), t.ui.videoPlaceholderImage.hide();
};
}(this));
}, o.prototype._handleVideoPlayed = function() {
return M.Analytics.recordEvent("clicked video play", {
action:"click",
object:{
id:".community-design-course-modal-video",
type:"modal"
}
});
}, o.prototype._handleVideoCompleted = function() {
return M.Analytics.recordEvent("video completed", {
action:"view",
object:{
id:".community-design-course-modal-video",
type:"modal"
}
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityFreeTrialDaysRemaining = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_free_trial_days_remaining", 
o.prototype.className = "community-free-trial-days-remaining-container", o.prototype.ui = {
actionButton:".community-modal-action-button"
}, o.prototype.regions = {
billingFeaturesRegion:".billing-features-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.onShow = function() {
return this._trackViewAnalytics(), this._showBillingFeatures();
}, o.prototype._handleActionButtonClick = function(t) {
return t.preventDefault(), this._trackClickAnalytics(), Mighty.navigate(M.URLHelper.makeLink("community_billing_settings_path", "upgrade"), {
trigger:!0
});
}, o.prototype._trackViewAnalytics = function() {
return M.Analytics.recordEvent("viewed modal", {
action:"view",
object:{
id:".community-free-trial-days-remaining-modal",
type:"modal"
}
});
}, o.prototype._trackClickAnalytics = function() {
return M.Analytics.recordEvent("clicked modal button", {
action:"click",
object:{
id:".community-free-trial-days-remaining-modal",
type:"modal"
}
});
}, o.prototype._showBillingFeatures = function() {
return this.billingFeaturesRegion.show(new Mighty.Views.BillingFeatures({
model:M.network,
selectedMessage:this._getSelectedMessage(),
selectedSectionTitle:trl("Don\u2019t lose access to the features you\u2019re using now:"),
popularMessage:trl("Explore the most popular features of The {business_plan_name} before your free trial ends or simply lock them in now.", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
popularSectionTitle:trl("Our most popular features on The {business_plan_name}:", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
otherSectionTitle:trl("And more worth exploring:"),
selectedFeatureIds:M.network.getUsedBillingFeatures()
}));
}, o.prototype._getSelectedMessage = function() {
var t;
return t = M.network.cancelingBillingSubscription.getRemainingDays(), 0 === t ? trl("We love that you\u2019re exploring the most popular features of The {business_plan_name}. Your free trial ends today. Upgrade now to lock them in.", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}) :trl("We love that you\u2019re exploring the most popular features of The {business_plan_name}. Your free trial ends in {count || day, days}. Upgrade now to lock them in.", {
business_plan_name:M.Settings.billingPlan.business2021.displayName,
count:t
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityFreeTrialEnded = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_free_trial_ended", 
o.prototype.className = "community-free-trial-ended-container", o.prototype.ui = {
actionButton:".community-modal-action-button"
}, o.prototype.regions = {
billingFeaturesRegion:".billing-features-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.onShow = function() {
return this._trackViewAnalytics(), this._showBillingFeatures();
}, o.prototype._handleActionButtonClick = function(t) {
return t.preventDefault(), this._trackClickAnalytics(), Mighty.navigate(M.URLHelper.makeLink("community_billing_settings_path", "upgrade"), {
trigger:!0
});
}, o.prototype._trackViewAnalytics = function() {
return M.Analytics.recordEvent("viewed modal", {
action:"view",
object:{
id:".community-free-trial-ended-modal",
type:"modal"
}
});
}, o.prototype._trackClickAnalytics = function() {
return M.Analytics.recordEvent("clicked modal button", {
action:"click",
object:{
id:".community-free-trial-ended-modal",
type:"modal"
}
});
}, o.prototype._showBillingFeatures = function() {
return this.billingFeaturesRegion.show(new Mighty.Views.BillingFeatures({
model:M.network,
selectedSectionTitle:trl("Recover your content now:"),
popularSectionTitle:trl("Our most popular features on The {business_plan_name}:", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
otherSectionTitle:trl("And access features that will make things even easier:"),
selectedFeatureIds:M.network.getForceDowngradeBillingFeatures()
}));
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityFreeTrialReprompt = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_free_trial_reprompt", 
o.prototype.className = "community-free-trial-reprompt-container", o.prototype.eventObjectId = ".community-free-trial-reprompt-modal", 
o.prototype.ui = {
actionButton:".community-modal-action-button"
}, o.prototype.regions = {
billingFeaturesRegion:".billing-features-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.onShow = function() {
return this._showBillingFeatures();
}, o.prototype._handleActionButtonClick = function(t) {
return t.preventDefault(), this._trackClickAnalytics(), M.SubmitHelper.submitWithDisabledButton(this.ui.actionButton, function(t) {
return function(t) {
return M.network.billing.customer.startTrial({
success:function() {
var e;
return t(), e = M.isPhoneSize ? trl("You're on the 14-day Free Trial") :trl("Congratulations, you've started your 14-day Free Trial!"), 
M.SystemToastHelper.showSuccess(e), Mighty.closeModal();
}
});
};
}(this));
}, o.prototype._showBillingFeatures = function() {
return this.billingFeaturesRegion.show(new Mighty.Views.BillingFeatures({
model:M.network,
popularSectionTitle:trl("Our most popular features on The {business_plan_name}:", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
otherSectionTitle:trl("And access features that will make things even easier:")
}));
}, o;
}(Mighty.Views.BaseTrackedModal);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CommunityRestoreFreeTrial = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/community_restore_free_trial", 
o.prototype.className = "community-restore-free-trial-container", o.prototype.eventObjectId = ".community-restored-free-trial-modal", 
o.prototype.ui = {
actionButton:".community-modal-action-button"
}, o.prototype.regions = {
billingFeaturesRegion:".billing-features-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.onShow = function() {
return this._showBillingFeatures();
}, o.prototype._handleActionButtonClick = function(t) {
return t.preventDefault(), this._trackClickAnalytics(), M.SubmitHelper.submitWithDisabledButton(this.ui.actionButton, function(t) {
return function(t) {
return M.network.billing.customer.startTrial({
success:function() {
var e;
return t(), e = M.isPhoneSize ? trl("You're on the 14-day Free Trial") :trl("Congratulations, you've started your 14-day Free Trial!"), 
M.SystemToastHelper.showSuccess(e), Mighty.closeModal();
}
});
};
}(this));
}, o.prototype._showBillingFeatures = function() {
return this.billingFeaturesRegion.show(new Mighty.Views.BillingFeatures({
model:M.network,
popularSectionTitle:trl("Our most popular features on The {business_plan_name}:", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
otherSectionTitle:trl("And access features that will make things even easier:")
}));
}, o;
}(Mighty.Views.BaseTrackedModal);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.TourModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed/modals/tour", o.prototype.className = "tour-modal modal-content", 
o.prototype.ui = {
actionButton:".tour-modal-action-button",
videoPlaceholderImage:".modal-video-placeholder-image"
}, o.prototype.regions = {
videoRegion:".video-region"
}, o.prototype.events = {
"click @ui.actionButton":"_handleActionButtonClick"
}, o.prototype.defaultOptions = function() {
return {
description:null,
videoUrl:null,
videoCoverUrl:null,
subject:null,
actionButtonText:null,
actionButtonCallback:null
};
}, o.prototype.serializeData = function() {
return {
description:this.options.description,
action_button_text:this._getActionButtonText(),
video_cover_url:this.options.videoCoverUrl
};
}, o.prototype.onShow = function() {
return this._trackViewAnalytics(), this._setupVideoPlayer();
}, o.prototype._getActionButtonText = function() {
return this.options.actionButtonText ? this.options.actionButtonText :M.network.isFreeTrialAvailable() ? trl("Start Your Free Trial") :M.network.isBelowBusinessPlan() ? trl("Upgrade Now") :trl("Continue Mighty Checklist");
}, o.prototype._handleActionButtonClick = function(t) {
return t.preventDefault(), this._trackClickAnalytics(), this.options.actionButtonCallback ? this.options.actionButtonCallback() :M.network.isBelowBusinessPlan() ? M.network.isFreeTrialAvailable() ? M.SubmitHelper.submitWithDisabledButton(this.ui.actionButton, function(t) {
return function(t) {
return M.network.billing.customer.startTrial({
success:function() {
var e;
return e = M.isPhoneSize ? trl("You're on the 14-day Free Trial") :trl("Congratulations, you've started your 14-day Free Trial!"), 
M.SystemToastHelper.showSuccess(e), Mighty.navigate(M.URLHelper.makeLink("community_path")), 
t(), Mighty.closeModal();
},
error:function() {
return M.SystemToastHelper.showWarning(trl("Whoops! Something went wrong, please refresh and try again")), 
Mighty.navigate(M.URLHelper.makeLink("community_path")), t(), Mighty.closeModal();
}
});
};
}(this)) :(Mighty.navigate(M.URLHelper.makeLink("community_billing_settings_path", "upgrade"), {
trigger:!0
}), Mighty.closeModal()) :(Mighty.navigate(M.URLHelper.makeLink("community_checklist_settings_path"), {
trigger:!0
}), Mighty.closeModal());
}, o.prototype._trackViewAnalytics = function() {
var t;
return t = M.Analytics.getAnalyticsRequestPage(n.history.fragment), M.Analytics.recordEvent("viewed " + this._getAnalyticsEventAction(), {
action:"view",
request_page:t,
object:{
id:".tour-modal-" + this.options.subject,
type:"modal"
}
});
}, o.prototype._trackClickAnalytics = function() {
var t;
return t = M.Analytics.getAnalyticsRequestPage(n.history.fragment), M.Analytics.recordEvent("clicked " + this._getAnalyticsEventAction(), {
action:"click",
request_page:t,
object:{
id:".tour-modal-action-button-" + this.options.subject,
type:"modal"
}
});
}, o.prototype._getAnalyticsEventAction = function() {
return M.network.isFreeTrialAvailable() ? "trial" :"upgrade";
}, o.prototype._setupVideoPlayer = function() {
return r.when(M.Util.getCachedScript(M.Settings.javascripts.videoBundle)).then(function(t) {
return function(e) {
var o;
return o = new Mighty.Views.VideoPlayer({
controlsEnabled:!0,
model:M.network,
videoUrl:t.options.videoUrl,
trackable:!0,
hideTrackableIcon:!0
}), t.listenToOnce(o, "video:played", t._handleVideoPlayed), t.listenToOnce(o, "video:trigger_completion", t._handleVideoCompleted), 
t.videoRegion.show(o), t.ui.videoPlaceholderImage.hide();
};
}(this));
}, o.prototype._handleVideoPlayed = function() {
var t;
return t = M.Analytics.getAnalyticsRequestPage(n.history.fragment), M.Analytics.recordEvent("clicked video play", {
action:"click",
request_page:t,
object:{
id:".tour-modal-video-" + this.options.subject,
type:"modal"
}
});
}, o.prototype._handleVideoCompleted = function() {
var t;
return t = M.Analytics.getAnalyticsRequestPage(n.history.fragment), M.Analytics.recordEvent("video completed", {
action:"view",
request_page:t,
object:{
id:".tour-modal-video-" + this.options.subject,
type:"modal"
}
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.FeedDisabled = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/feed_disabled", o;
}(Mighty.Views.ItemView);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(o, n, i, r, s, a) {
return o.FeedLayout = function(o) {
function n() {
return this._showModal = t(this._showModal, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.prototype.template = "communities/feed_layout", n.prototype.id = "feed-layout", 
n.prototype.preserveScrolling = !0, n.prototype.waypointOffset = 90, n.prototype.regions = function() {
return {
onboardingCardsRegion:{
selector:"#onboarding-cards-region",
regionType:Mighty.Views.SlideRegion
},
postPromptRegion:{
selector:"#post-prompt-region",
regionType:Mighty.Views.FadingRegion
},
filterRegion:"#feed-filter-region",
hostPromptRegion:"#host-card-prompt-region",
listRegion:".list-region"
};
}, n.prototype.initialize = function() {
var t;
if (!(this.filterState = this.options.filterState)) throw "filterState model required";
return n.__super__.initialize.apply(this, arguments), this.listenTo(M.eventBus, "userJoined", this._userJoined), 
this.listenTo(this.collection, "personalizing", function(t) {
return function() {
return t.$el.addClass("is-personalizing"), t.listenToOnce(t.collection, "fetch:ended", function() {
return this.$el.removeClass("is-personalizing"), this.collection.trigger("personalizingEnded");
});
};
}(this)), t = this.collection.defaultSort, M.network.isEnabledFeature("flex_spaces") && (t = this.model.getFeedDefaultOrder()), 
this.collection.setSearchOptions({
filters:this.filterState.getFiltersAsString(),
sort:this.filterState.getSort(t)
}), this.listenTo(this.filterState, "change", this._applyFiltersAndSort), this.listenTo(this.filterState, "reset", this._applyFiltersAndSort), 
this.listenTo(M.eventBus, "closedFlyout", this._updatePageLink), this.listenTo(this.model, "change:enabled_features", this._safeRerenderPostPromptRegion), 
this.listenTo(this.model, "changeLiveSpaces", this._refreshTitleBar), this.model.liveSpaces.each(function(t) {
return function(e) {
return t.listenTo(e, "change:joined_fullscreen", t._refreshTitleBar);
};
}(this));
}, n.prototype.onShow = function() {
return this._showPrompts(), this._showFilterRegion(), this._showFeed(), Mighty.CommunitiesApp.afterNetworkSplash(this._showModal);
}, n.prototype.isDirty = function() {
var t, e, o, n;
return (null != (t = this.listRegion) && null != (e = t.currentView) && "function" == typeof e.isDirty ? e.isDirty() :void 0) || (null != (o = this.postPromptRegion) && null != (n = o.currentView) && "function" == typeof n.isDirty ? n.isDirty() :void 0);
}, n.prototype.getAbandonMessage = function() {
var t, e;
return (null != (t = this.postPromptRegion) && null != (e = t.currentView) && "function" == typeof e.isDirty ? e.isDirty() :void 0) ? trl("You haven't finished your Post yet. Do you want to leave without saving?") :void 0;
}, n.prototype._updatePageLink = function() {
return this.isClosed || Mighty.CommunitiesApp.LayoutManager.isFlyoutOpen() ? void 0 :Mighty.navigate(this.filterState.feedLink(), {
trigger:!1,
replace:!0
});
}, n.prototype._applyFiltersAndSort = function() {
return this._updatePageLink(), this.collection.setSearchOptions(this.filterState.getQuery()), 
this._showFeed();
}, n.prototype._refreshTitleBar = function() {
return this.trigger("titleBar:reShow");
}, n.prototype._getTitleBarView = function() {
var t, e, o, n, i;
return M.network.currentUserIsMember() ? (e = M.network.currentUserIsHostOrModerator() ? "mighty-btn-filled-theme-color-button mighty-icon-add-toggle-10-16 mighty-btn-icon-square-toggle-small-tiny" :"mighty-btn-icon-square mighty-btn-filled-theme-color-button phone-hide mighty-icon-add-toggle-10-16", 
t = new Mighty.Views.Menus.CreateMenu({
model:this.model,
showHint:!1,
buttonClass:e
})) :t = new Mighty.Views.JoinWidget({
model:this.model
}), o = !1, n = null, this.model.isNetwork() && M.network.isEnabledFeature("advanced_branding") && (o = M.network.hasBackgroundImageBanner() || M.network.hasBrandBannerOnWhite(), 
M.network.hasBrandBannerOnWhite() && (n = M.ImageUtil.applyVersionToImageUrl(M.network.getBrandBannerOnWhiteUrl(), "brand_banner_medium"))), 
i = new Mighty.Views.TitleBar({
title:this.model.getTitle(),
subTitle:this.model.getSubtitle(),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableActionRegion:!0,
primaryButtonLink:M.URLHelper.makeLink("community_settings_path"),
primaryButtonText:trl("Manage"),
actionView:t,
isFilled:o,
bannerImageUrl:n
}), this.listenTo(this.model, "change:title change:subtitle brandingImages:updated", function() {
return this.trigger("titleBar:reShow");
}), i = this._wrapForLiveVideoPreview(i);
}, n.prototype._wrapForLiveVideoPreview = function(t) {
var e, o;
return M.network.isEnabledFeature("live_space") ? this.model.liveSpaces.isEmpty() ? t :this._hasJoinedFullscreen(this.model.liveSpaces) ? t :(e = new Mighty.CommunitiesApp.Feed.LiveSpacePreviewCarousel({
collection:this.model.liveSpaces
}), o = new Mighty.Views.CompositeHeader({
heroView:e,
titleBarView:t
})) :t;
}, n.prototype._hasJoinedFullscreen = function(t) {
return t.find(function(t) {
return t.get("joined_fullscreen");
});
}, n.prototype._showPrompts = function() {
return this._showPostPromptRegion(), this._showOnboardingCardsRegion();
}, n.prototype._showFilterRegion = function() {
return 0 === M.network.get("network_post_count") && M.isPhoneSize ? void 0 :this.filterRegion.show(new Mighty.CommunitiesApp.Feed.FilterLayout(a.extend(this.options, {
model:this.model,
collection:this.collection,
showListToggle:!0,
filterState:this.filterState
})));
}, n.prototype._safeRerenderPostPromptRegion = function() {
var t;
return (null != (t = this.postPromptRegion.currentView) ? t.isDirty() :void 0) ? void 0 :this._showPostPromptRegion();
}, n.prototype._showPostPromptRegion = function() {
return this.model.showPostPrompt() ? this._showPostPrompt() :this.postPromptRegion.close();
}, n.prototype._showPostPrompt = function() {
var t, e;
return t = {
enablePostPublish:!0,
enableSubmit:!1,
navigateOnSchedule:!0,
model:this.model,
filterState:this.filterState
}, 0 === M.network.get("network_post_count") && M.isPhoneSize && (t.textareaPlaceholder = trl("Add your first post...")), 
e = new Mighty.Views.CreatePostPrompt(t), this.postPromptRegion.show(e), this.listenTo(e, "submit:complete", function(t) {
return function() {
return t.collection.isDefaultFiltered() ? void 0 :t.filterState.reset({
filters:"",
mode:"feed"
});
};
}(this));
}, n.prototype._showOnboardingCardsRegion = function() {
return this.model.showOnboardingPrompt() ? this._showOnboardingPrompt() :this.onboardingCardsRegion.close();
}, n.prototype._showOnboardingPrompt = function() {
var t;
return t = new Mighty.Views.OnboardingCards({
model:this.model
}), this.onboardingCardsRegion.show(t), this.listenToOnce(this.onboardingCardsRegion, "close", this._finishOnboarding);
}, n.prototype._showFeed = function() {
return this.filterState.isFeedMode() ? this._showFeedList() :this._showFeedPosts();
}, n.prototype._showModal = function() {
if (M.network.currentUserIsHost()) switch (this.options.modal) {
case "tour":
return this._showTourModal(trl("Watch the Full Tour"), new Mighty.CommunitiesApp.TourModal({
model:M.network,
description:trl("Bring together your community, online courses, content, and more \u2014 and charge for any part of it \u2014 all here in your Mighty Network!"),
videoUrl:M.Settings.modalVideos.tour.videoUrl,
videoCoverUrl:M.Settings.modalVideos.tour.videoCoverUrl,
subject:"for-network"
}));

case "courses-tour":
return this._showTourModal(trl("Watch our Course Tutorial"), new Mighty.CommunitiesApp.TourModal({
model:M.network,
description:trl("See how an online course in {network_name} works \u2013 from how your members will experience it to how you'll set it up.", {
network_name:M.network.getTitle()
}),
videoUrl:M.Settings.modalVideos.coursesTour.videoUrl,
videoCoverUrl:M.Settings.modalVideos.coursesTour.videoCoverUrl,
subject:"for-courses"
}));

case "business-plan-welcome":
return this._showTourModal(trl("Welcome to The Business Plan!"), new Mighty.CommunitiesApp.TourModal({
model:M.network,
videoUrl:M.Settings.modalVideos.businessPlanWelcome.videoUrl,
videoCoverUrl:M.Settings.modalVideos.businessPlanWelcome.videoCoverUrl,
actionButtonText:trl("Join Mighty Business Hosts"),
actionButtonCallback:function() {
return window.open(M.Settings.modalVideos.businessPlanWelcome.actionButtonUrl);
},
subject:"for-business-plan"
}));

case "learning-opt-in":
if (!M.network.currentBillingPlan.get("display_name")) return;
return Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("Wonderful!"),
message:trl("You're confirmed, {first_name}<br/><br/>You'll get the most out of your new {plan_name} with this set of semi-regular tips and highlights delivered directly to your inbox.", {
first_name:M.currentUser.get("first_name"),
plan_name:M.network.currentBillingPlan.get("display_name")
}),
confirmText:trl("I'm In!"),
showReject:!1
});

case "learning-opt-out":
if (!M.network.currentBillingPlan.get("display_name")) return;
return Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("Thanks for letting us know!"),
message:trl("You're opting out of tips and highlights, which hopefully means things are buzzing in your {plan_name}!", {
plan_name:M.network.currentBillingPlan.get("display_name")
}),
confirmText:trl("I'm Done"),
showReject:!1
});

default:
if (M.Settings.isTest) return;
if (M.network.isExperimentVariant("mg201", "experiment") && M.network.get("has_used_billing_free_trial") && (this._shouldShowFreeTrialEndedModal() || this._shouldShowFreeTrialDaysRemainingModal())) return this._shouldShowFreeTrialEndedModal() ? this._showModalWithDelay(function(t) {
return function() {
return t._showFreeTrialEndedModal();
};
}(this)) :this._showModalWithDelay(function(t) {
return function() {
return t._showFreeTrialDaysRemainingModal();
};
}(this));
if (M.network.currentBillingPlan.isFreePlan() && !M.network.get("has_used_billing_free_trial") && M.network.get("has_ever_used_billing_free_trial") && !M.currentUser.getOnboarding("seen_free_trial_restore_modal")) return this._showModalWithDelay(function(t) {
return function() {
return t._showRestoreFreeTrialModal();
};
}(this));
if (M.network.currentBillingPlan.isFreePlan() && M.TimeHelper.isMoreThanTimeSince(M.network.get("created_at"), 30, "days") && !M.network.get("has_used_billing_free_trial") && !s.cookie("dismissed_community_free_trial_prompt_modal")) return this._showModalWithDelay(function(t) {
return function() {
return t._showFreeTrialRepromptModal();
};
}(this));
if (!M.network.get("backstory") && M.network.currentUserIsCreator() && M.TimeHelper.isMoreThanTimeSince(M.network.get("created_at"), 1, "day") && M.TimeHelper.isLessThanTimeSince(M.network.get("created_at"), 6, "months") && !s.cookie("dismissed_community_backstory_modal") && this._dismissedBackfillModalTimes() < 3) return this._showModalWithDelay(function(t) {
return function() {
return t._showBackstoryBackfillModal();
};
}(this));
}
}, n.prototype._shouldShowFreeTrialEndedModal = function() {
return M.network.currentBillingPlan.isFreePlan() && !M.network.currentBillingPlan.isFreeTrialPlan() && !s.cookie("dismissed_community_free_trial_ended_modal");
}, n.prototype._shouldShowFreeTrialDaysRemainingModal = function() {
return M.network.currentBillingPlan.isFreeTrialPlan() && M.network.cancelingBillingSubscription.getRemainingDays() <= 3 && !s.cookie("dismissed_community_free_trial_days_remaining_modal");
}, n.prototype._showModalWithDelay = function(t) {
return s.doTimeout(3e3, function() {
return Mighty.modalRegion.currentView || "function" == typeof t && t(), !1;
});
}, n.prototype._showTourModal = function(t, e) {
return M.network.billing.plans.getFirstPageIfNeeded(function(o) {
return function() {
return Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:t,
contentView:e,
showConfirm:!1,
showReject:!1,
canceledCallback:function() {
return Mighty.navigate(M.URLHelper.makeLink("community_path"));
}
});
};
}(this));
}, n.prototype._showCommunityDesignModal = function() {
return M.network.billing.plans.getFirstPageIfNeeded(function(t) {
return function() {
return M.network.currentBillingPlan.isProfessionalPlan() || M.TimeHelper.currentDateIsAfter(moment("2021-04-12T08:00:00Z")) ? void 0 :Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:null,
contentView:new Mighty.CommunitiesApp.CommunityDesignModal(),
showConfirm:!1,
showReject:!1,
canceledCallback:function() {
return s.cookie("dismissed_community_design_course_modal", "1", {
expires:2
}), M.currentUser.saveOnboardingData({
dismissed_community_design_course_modal:!0
});
}
});
};
}(this));
}, n.prototype._showBackstoryBackfillModal = function() {
var t;
return t = new Mighty.CommunitiesApp.Views.Modals.BackfillBackstory({
model:M.network
}), Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("What brought you to Mighty Networks?"),
contentView:t,
showConfirm:!0,
showReject:!1,
confirmText:trl("Save"),
confirmedCallback:function() {
return t.submit();
},
canceledCallback:function(t) {
return function() {
return s.cookie("dismissed_community_backstory_modal", "1", {
expires:7
}), M.currentUser.saveOnboardingData({
dismissed_community_design_course_modal_times:t._dismissedBackfillModalTimes() + 1
});
};
}(this)
});
}, n.prototype._dismissedBackfillModalTimes = function() {
return M.currentUser.getOnboarding("dismissed_community_design_course_modal_times") || 0;
}, n.prototype._showRestoreFreeTrialModal = function() {
var t;
return t = new Mighty.CommunitiesApp.CommunityRestoreFreeTrial(), Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("Explore more of The {business_plan_name} for free", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
message:trl("[bold: We've reset your 14-day free trial of The {business_plan_name}.<br/> It's our gift to you.] <br/><br/>The {business_plan_name} is our best value and most popular option. See why thousands of Hosts just like you are building thriving businesses on it.", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
contentView:t,
showConfirm:!1,
showCancel:!0,
additionalClass:"marketing-one-modal",
showBackgroundDecorations:!0,
rejectedCallback:this._dismissFreeTrialRestoreModal,
canceledCallback:this._dismissFreeTrialRestoreModal
});
}, n.prototype._dismissFreeTrialRestoreModal = function() {
return M.currentUser.saveOnboardingData({
seen_free_trial_restore_modal:!0
});
}, n.prototype._showFreeTrialRepromptModal = function() {
var t;
return t = new Mighty.CommunitiesApp.CommunityFreeTrialReprompt(), Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("Make growing your<br/>Mighty Network even easier"),
message:trl("You've got the seeds of a fantastic community. Now see what's possible when you take advantage of The Community & Business Plans. <br/>[bold: Start your 14-day free trial of The {business_plan_name} now for:]", {
business_plan_name:M.Settings.billingPlan.business2021.displayName
}),
contentView:t,
showConfirm:!1,
showCancel:!0,
additionalClass:"marketing-one-modal",
showBackgroundDecorations:!0,
rejectedCallback:this._dimissFreeTrialRepromptModal,
canceledCallback:this._dimissFreeTrialRepromptModal
});
}, n.prototype._dimissFreeTrialRepromptModal = function() {
return s.cookie("dismissed_community_free_trial_prompt_modal", 1, {
expires:7
});
}, n.prototype._showFreeTrialDaysRemainingModal = function() {
var t, e, o;
return o = new Mighty.CommunitiesApp.CommunityFreeTrialDaysRemaining(), t = 0 === (e = M.network.cancelingBillingSubscription.getRemainingDays()) ? trl("Your Free Trial Ends Today.") :trl("You Have {count || Day, Days} Left in Your Free Trial!", {
count:e
}), Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:t,
contentView:o,
showConfirm:!1,
showCancel:!0,
additionalClass:"marketing-one-modal",
showBackgroundDecorations:!0,
rejectedCallback:this._dimissFreeTrialDaysRemainingModal,
canceledCallback:this._dimissFreeTrialDaysRemainingModal
});
}, n.prototype._dimissFreeTrialDaysRemainingModal = function() {
return s.cookie("dismissed_community_free_trial_days_remaining_modal", 1, {
expires:1
});
}, n.prototype._showFreeTrialEndedModal = function() {
var t;
return t = new Mighty.CommunitiesApp.CommunityFreeTrialEnded(), Mighty.CommunitiesApp.ModalManager.showConfirmationModal({
title:trl("The Business Plan makes it so much easier"),
message:trl("Your free trial is over, but not gone forever. Upgrade to recover the courses, group, events, and more that you or your members created."),
contentView:t,
showConfirm:!1,
showCancel:!0,
additionalClass:"marketing-one-modal",
showBackgroundDecorations:!0,
rejectedCallback:this._dimissFreeTrialEndedModal,
canceledCallback:this._dimissFreeTrialEndedModal
});
}, n.prototype._dimissFreeTrialEndedModal = function() {
return s.cookie("dismissed_community_free_trial_ended_modal", 1, {
expires:7
});
}, n.prototype._showFeedList = function() {
var t;
if (this.filterState.isFeedMode() && !(this.listRegion.currentView instanceof Mighty.Views.FeedList)) return t = new Mighty.Views.FeedList({
model:this.model,
collection:this.collection,
className:"community-feed",
emptyViewText:this._emptyViewText()
}), this.listRegion.show(t);
}, n.prototype._showFeedPosts = function() {
var t;
if (!(this.filterState.isFeedMode() || this.listRegion.currentView instanceof Mighty.Views.FeedPostList)) return t = new Mighty.Views.FeedPostList({
collection:this._getNonPromptFeedCollection(),
emptyViewText:this._emptyViewText()
}), this.listRegion.show(t);
}, n.prototype._emptyViewText = function() {
return this.collection.isDefaultFiltered() ? trl("{spaceTitle} is just getting started!", {
spaceTitle:this.model.get("title")
}) :trl("There aren't any posts that match those filters.");
}, n.prototype._getNonPromptFeedCollection = function() {
return this.nonPromptFeed ? this.nonPromptFeed :this.nonPromptFeed = new Mighty.Models.SpaceNonPromptFeedItems(null, {
space:this.model.getOwningSpace(),
collection:this.model.feed
});
}, n.prototype._userJoined = function() {
return this._showPrompts(), this._safeRerenderPostPromptRegion();
}, n.prototype._finishOnboarding = function() {
return this.postPromptRegion.currentView ? void 0 :this._showPostPromptRegion();
}, n;
}(Mighty.Views.FeedLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.ChoicesFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "choices-filter-bar", o.prototype._setupTabs = function() {
return this.model.choices.each(function(t) {
return function(e) {
return t._addTab(e);
};
}(this));
}, o.prototype._addTab = function(t) {
var e, o;
return o = M.URLHelper.makeLinkWithQuerystring("community_post_answerers_path", {
choice_id:t.get("id")
}, this.model), e = trl("{choice} ({count})", {
choice:t.get("text").truncate(20),
count:t.get("tally")
}), this.addTab(t.get("id"), o, e, e);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CirclesFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "circles-filter-bar", o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
includeHostTabs:!1
});
}, o.prototype._setupTabs = function() {
return this._addTab("all-groups", trl("All {name}", {
name:this.model.siloPluralActualName("circle")
}), trl("All")), this._addTab("top-groups", trl("Top {name}", {
name:this.model.siloPluralActualName("circle")
}), trl("Top")), M.currentUser.isLoggedIn() && this.model.currentUserIsMember() && this._addTab("your-groups", trl("View {name}", {
name:this.model.siloPossessivePluralActualName("circle")
}), trl("Yours")), this._addTab("new-groups", trl("Newest {name}", {
name:this.model.siloPluralActualName("circle")
}), trl("Newest")), M.network.isEnabledFeature("location") && this._addTab("groups-near-you", trl("{name} Near You", {
name:this.model.siloPluralActualName("circle")
}), trl("Near You")), this.options.includeHostTabs && this.model.currentUserIsHost() ? (this.model.isEnabledFeature("member_circle_creation") && this._addTab("member-created-groups", trl("{name} Created by Members", {
name:this.model.siloPluralActualName("circle")
}), trl("Member Created")), this._addTab("inactive-groups", trl("Inactive {name}", {
name:this.model.siloPluralActualName("circle")
}), trl("Inactive"))) :void 0;
}, o.prototype._addTab = function(t, e, o) {
return this.addTab(t, M.URLHelper.makeLink("community_path", t), e, o);
}, o.prototype._promptToJoin = function() {
return M.Auth.promptToJoin({
spaceType:"Circle"
});
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CoursesFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "courses-filter-bar", o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
includeHostTabs:!1
});
}, o.prototype._setupTabs = function() {
return this._addTab("all-courses", trl("All {name}", {
name:this.model.siloPluralActualName("course")
}), trl("All")), this._addTab("top-courses", trl("Top {name}", {
name:this.model.siloPluralActualName("course")
}), trl("Top")), M.currentUser.isLoggedIn() && this.model.currentUserIsMember() && this._addTab("your-courses", trl("View {name}", {
name:this.model.siloPossessivePluralActualName("course")
}), trl("Yours")), this._addTab("new-courses", trl("Newest {name}", {
name:this.model.siloPluralActualName("course")
}), trl("Newest")), this.options.includeHostTabs && this.model.currentUserIsHost() ? (this.model.isEnabledFeature("member_course_creation") && this._addTab("member-created-courses", trl("{name} Created by Members", {
name:this.model.siloPluralActualName("course")
}), trl("Member Created")), this._addTab("inactive-courses", trl("Inactive {name}", {
name:this.model.siloPluralActualName("course")
}), trl("Inactive"))) :void 0;
}, o.prototype._addTab = function(t, e, o) {
return this.addTab(t, M.URLHelper.makeLink("community_path", t), e, o);
}, o.prototype._promptToJoin = function() {
return M.Auth.promptToJoin({
spaceType:"Course"
});
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.EventsFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "events-filter-bar", o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
dayIndex:null,
post:null
});
}, o.prototype._setupTabs = function() {
return this.addTab("upcoming-events", this.model.pageLink("events"), trl("View Upcoming Events"), trl("Upcoming")), 
M.network.isEnabledFeature("location") && this.addTab("nearby-events", this.model.pageLink("events/nearby"), trl("View Nearby Events"), trl("Nearby")), 
this.addTab("past-events", this.model.pageLink("events/past"), trl("View Past Events"), trl("Past")), 
this.model.currentUserIsMember() ? this.addTab("yours-events", this.model.pageLink("events/yours"), trl("View Your Events"), trl("Yours")) :void 0;
}, o.prototype._setupDynamicTabs = function() {
var t, e, n;
return o.__super__._setupDynamicTabs.apply(this, arguments), this.options.dayIndex && (t = M.TimeHelper.icsUtcFormatToDateTime(this.options.dayIndex).local(), 
e = M.TimeFormatHelper.standardDateMedium(t), this.addTab("day-events", this.model.pageLink("events", {
day_index:this.options.dayIndex
}), trl("Events on {date}", {
date:e
}), e, {
clearLink:this.model.pageLink("events")
})), (n = this.options.post) ? this.addTab("event-list", this.model.pageLink("events", {
event_id:this.options.post.id
}), trl("Events for {event_title}", {
event_title:n.getTitle()
}), n.getTitle(), {
clearLink:this.model.pageLink("events")
}) :void 0;
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.MembersFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "members-filter-bar", o.prototype._setupTabs = function() {
var t;
return this._addTab("top-members", this._getTopMembersLabel()), M.network.isEnabledFeature("location") && this._addTab("members-near-you", trl("Near You")), 
this._addTab("new-members", trl("Newest")), M.network.isEnabledBillingFeature("multiple_hosts") && this.model.isOwningSpace() && this._addTab("hosts", trl("Hosts")), 
("function" == typeof (t = this.model).isAmbassadorEnabled ? t.isAmbassadorEnabled() :void 0) && this._addTab("ambassadors", trl("Ambassadors")), 
this._addTab("online-members", trl("Online Now"));
}, o.prototype._addTab = function(t, e, o) {
return null == o && (o = {}), this.addTab(t, o.link || this.model.pageLink(t), e, e, o);
}, o.prototype._getTopMembersLabel = function() {
return M.network.isEnabledBillingFeature("top_members") ? trl("Top") :trl("All");
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.RSVPFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "rsvp-filter-bar", o.prototype._setupTabs = function() {
return this.addTab("yes", M.URLHelper.makeLink("community_event_rsvps_yes_path", this.model), trl("View Going"), trl("Going ({going_count})", {
going_count:this.model.getRsvpYesCount()
})), this.addTab("maybe", M.URLHelper.makeLink("community_event_rsvps_maybe_path", this.model), trl("View Maybe"), trl("Maybe ({maybe_count})", {
maybe_count:this.model.getRsvpMaybeCount()
})), this.addTab("no", M.URLHelper.makeLink("community_event_rsvps_no_path", this.model), trl("View Not Going"), trl("Not Going ({not_going_count})", {
not_going_count:this.model.getRsvpNoCount()
})), this.addTab("none", M.URLHelper.makeLink("community_event_rsvps_none_path", this.model), trl("View No RSVP"), trl("No RSVP ({no_rsvp_count})", {
no_rsvp_count:this.model.getNoRsvpResponseCount()
}));
}, o.prototype.updateTabCounts = function() {
return this.tabs.get("yes").set({
name:trl("Going ({going_count})", {
going_count:this.model.getRsvpYesCount()
})
}), this.tabs.get("maybe").set({
name:trl("Maybe ({maybe_count})", {
maybe_count:this.model.getRsvpMaybeCount()
})
}), this.tabs.get("no").set({
name:trl("Not Going ({not_going_count})", {
not_going_count:this.model.getRsvpNoCount()
})
}), this.tabs.get("none").set({
name:trl("No RSVP ({no_rsvp_count})", {
no_rsvp_count:this.model.getNoRsvpResponseCount()
})
});
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.ScheduledPostsFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "scheduled-posts-filter-bar", o.prototype._setupTabs = function() {
return this.addTab("all", this.model.pageLink("posts/scheduled"), trl("View All Scheduled Posts"), trl("Everything")), 
this.addTab("yours", this.model.pageLink("posts/scheduled/yours"), trl("View Your Scheduled Posts"), trl("Yours"));
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.FlexSpaceCourseContent = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.include(Mighty.Views.FlexSpacesHelper), o.prototype._getTitleBarView = function() {
return M.network.isEnabledFeature("flex_spaces") && M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :void 0;
}, o;
}(e.CourseContentLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(e, o, n, i, r, s) {
return this.FlexSpacePageEditorLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.include(Mighty.Views.FlexSpacesHelper), o.prototype.template = "communities/flex_space_page_editor_layout", 
o.prototype.regions = {
flexSpacePageEditorRegion:".flex-space-page-editor-region"
}, o.prototype.onShow = function() {
return this._showContent();
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
space_page_editor_is_empty:!this.options.post,
current_user_is_host:this.model.currentUserIsHost()
});
}, o.prototype._getTitleBarView = function() {
return M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :void 0;
}, o.prototype._showContent = function() {
return this.options.post ? this.flexSpacePageEditorRegion.show(new Mighty.Views.PostDetailLayout({
model:this.options.post
})) :void 0;
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.FlexSpacesCollectionDirectoryLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/flex_spaces_collection_directory_layout", 
o.prototype.className = "spaces-collection-wrapper", o.prototype.regions = function() {
return {
filterRegion:".filter-region",
listRegion:".spaces-list-item-region"
};
}, o.prototype.onShow = function() {
return this._setupSearchOptions(), this._showFilterRegion(), this._showListItemView();
}, o.prototype._setupSearchOptions = function() {
return this.collection.setSearchOptions(this.options.filterState.getQuery(this.collection.defaultFilter, this.collection.defaultSort));
}, o.prototype._showFilterRegion = function() {
return this.filterRegion.show(new Mighty.Views.AllSpacesFilterLayout(s.extend(this.options, {
model:this.model,
collection:this.collection,
filterState:this.options.filterState,
navTab:this.options.navTab
})));
}, o.prototype._showListItemView = function() {
return this.listRegion.show(new Mighty.Views.FlexSpaceList({
model:this.model,
collection:this.collection,
emptyViewText:tr("There are no spaces.")
}));
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.InfoWidget = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/info_widget", o.prototype.className = "widget", 
o.prototype.id = "info-widget", o.prototype.defaultOptions = function() {
return {
showStats:!0
};
}, o.prototype.initialize = function() {
return this.listenTo(this.model, "change", this.reRender);
}, o.prototype.serializeData = function() {
var t;
return t = this.model.pageLink("members"), s.extend(o.__super__.serializeData.apply(this, arguments), {
can_view_content:this.model.canViewContent(),
member_count_text:trl("{count} {count | Member, Members}", {
count:Humanize.intcomma(this.model.get("member_count"))
}),
members_link:t,
members_title:this.model.getMembersName(this.model.get("member_count")),
show_stats:!M.network.isLeanIn() && this.options.showStats
});
}, o.prototype.onShow = function() {
return this.showTooltips(this.$(".member-count"));
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.LiveSpaceFlyoutLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.displaySideContentOnIntermediateScreen = !0, o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
enableFullscreen:!0,
loadInFullscreen:!0,
sideContentLeftAligned:!1
});
}, o.prototype.showTab = function(t, e) {
var n;
return null == e && (e = {}), o.__super__.showTab.apply(this, arguments), (null != (n = this.contentRegion.currentView) ? n.model :void 0) ? this.listenTo(this.contentRegion.currentView.model, "change:seconds_to_broadcast", this._handleBroadcastStart) :void 0;
}, o.prototype._shouldShowDrawer = function() {
return !0;
}, o.prototype._handleBroadcastStart = function() {
var t;
return this._toggleOnlyShowSideContent((null != (t = this.contentRegion.currentView) ? t.shouldOnlyShowSideContent() :void 0) || !1);
}, o.prototype._getViewForTab = function(t, e) {
return null == e && (e = {}), new Mighty.Views.LiveSpaceLayout({
model:e.liveSpace
});
}, o;
}(Mighty.Views.BaseFlyoutLayout);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.MemberProfile", function(o, n, i, r, s, a) {
return o.AboutLayout = function(n) {
function i() {
return this._showMemberEvents = t(this._showMemberEvents, this), this._showMemberCourses = t(this._showMemberCourses, this), 
this._showMemberCircles = t(this._showMemberCircles, this), this._showTopicPicker = t(this._showTopicPicker, this), 
this._showMemberPersonalLinks = t(this._showMemberPersonalLinks, this), i.__super__.constructor.apply(this, arguments);
}
return e(i, n), i.prototype.template = "communities/member_profile/about", i.prototype.id = "community-member-about", 
i.prototype.regions = {
ambassadorBadgeRegion:"#ambassador-badge-region",
personBadgeRegion:"#person-badge-region",
roleBadgeRegion:"#role-badge-region",
circlesRegion:"#circle-region",
coursesRegion:"#courses-region",
introductionCardRegion:"#introduction-card-region",
segmentPromptRegion:"#segment-prompt-region",
topicPickerRegion:"#topic-picker-region",
eventsRegion:"#events-region",
personalLinksRegion:"#personal-links-region",
followersCountRegion:"#followers-count-region"
}, i.prototype.ui = {
badges:".badges",
coursesRow:"#courses-row",
circlesRow:"#circles-row",
topicsRow:"#topics-row",
eventsRow:"#events-row",
personalLinksRow:"#personal-links-row",
editPersonalLinksIconButton:".edit-personal-links-icon-button"
}, i.prototype.modelEvents = {
"change:follower_count":"_handleFollowerCountChanged",
"change:role":"_handleRoleChanged"
}, i.prototype.initialize = function() {
return this.isCurrentUser = this.model.isCurrentUser(), this.showCircles = M.network.isEnabledFeature("circles"), 
this.showCourses = M.network.isEnabledFeature("courses"), this.showTopics = M.network.isEnabledFeature("topics");
}, i.prototype.serializeData = function() {
var t, e, o, n, r, s, l, u;
return n = trl("{count} {count | Post, Posts}", {
count:Humanize.intcomma(this.model.get("post_count"))
}), e = trl("Last active {last_activity_time}", {
last_activity_time:M.TimeFormatHelper.relativePastLong(this.model.get("last_activity_at"))
}), M.network.isEnabledFeature("location") && (this.model.get("location") || this.isCurrentUser) ? (o = this.model.get("location") || M.currentUser.get("location"), 
l = !0) :l = !1, u = M.network.isEnabledFeature("segments") && !!this.model.get("primary_segment"), 
t = this.isCurrentUser ? null != (r = M.currentUser.introModel) ? r.getPlainDescription() :void 0 :null != (s = this.model.introModel) ? s.getPlainDescription() :void 0, 
a.extend(i.__super__.serializeData.apply(this, arguments), {
circle_silo_plural_name:M.network.siloPluralName("circle"),
course_silo_plural_name:M.network.siloPluralName("course"),
introduction_text:t,
last_active:e,
location:o,
post_count:n,
segment:u ? this.model.get("primary_segment").title :"",
segment_link:u ? M.URLHelper.makeLink("community_segment_path", this.model.get("primary_segment")) :void 0,
segment_silo_name:M.network.siloActualName("segment"),
show_circles:this.showCircles,
show_courses:this.showCourses,
show_followed_users_link:this.model.get("followed_user_count") > 0,
show_introduction:this.isCurrentUser ? M.currentUser.hasIntroduction() :this.model.hasIntroduction(),
show_introduction_callout:!M.currentUser.hasIntroduction() && this.isCurrentUser,
show_location:l,
show_location_callout:!l && this.isCurrentUser,
has_guessed_location:this.isCurrentUser && M.currentUser.get("has_guessed_location"),
show_segment:u,
show_segment_callout:M.network.isEnabledFeature("segments") && !u && this.isCurrentUser,
show_topics:this.showTopics
});
}, i.prototype.onShow = function() {
return this.showTooltips(null, {
delay:0
}), this._showBadges(), this.showTopics && this._loadTopics(), this.showCircles && this._loadMemberCircles(), 
this.showCourses && this._loadMemberCourses(), this._loadMemberEvents(), this._loadMemberPersonalLinks(), 
this._showFollowersCount();
}, i.prototype._showBadges = function() {
return this._showAmbassadorBadge(), this._showPersonBadge(), this._showRoleBadge(), 
this.ui.badges.toggle(null != this.ambassadorBadgeRegion.currentView || null != this.personBadgeRegion.currentView || null != this.roleBadgeRegion.currentView);
}, i.prototype._showAmbassadorBadge = function() {
return M.network.isAmbassadorEnabled() && void 0 !== this.model.get("ambassador_current_level_id") ? this.ambassadorBadgeRegion.show(new Mighty.Views.AmbassadorBadge({
model:this.model
})) :void 0;
}, i.prototype._showPersonBadge = function() {
return this.model.shouldShowBadge({
skipRole:!0
}) ? this.personBadgeRegion.show(new Mighty.Views.PersonBadge({
model:this.model,
open_new_tab:this.options.openNewTab,
skipRole:!0
})) :this.personBadgeRegion.close();
}, i.prototype._showRoleBadge = function() {
return this.model.shouldShowBadge({
onlyRole:!0
}) ? this.roleBadgeRegion.show(new Mighty.Views.PersonBadge({
model:this.model,
open_new_tab:this.options.openNewTab,
onlyRole:!0
})) :this.roleBadgeRegion.close();
}, i.prototype._loadMemberPersonalLinks = function() {
return this.model.personalLinks.getFirstPageIfNeeded(this._showMemberPersonalLinks);
}, i.prototype._showMemberPersonalLinks = function() {
return this.isClosed ? void 0 :this.model.personalLinks.isEmpty() ? (this.isCurrentUser && this.ui.editPersonalLinksIconButton.removeClass("hide"), 
this.isCurrentUser && this.ui.personalLinksRow.removeClass("hide"), void this.personalLinksRegion.close()) :(this.ui.personalLinksRow.removeClass("hide"), 
this.personalLinksRegion.show(new Mighty.Views.PersonalLinkTags({
collection:this.model.personalLinks
})));
}, i.prototype._loadTopics = function() {
return this.model.userTopics.getFirstPageIfNeeded(this._showTopicPicker);
}, i.prototype._showTopicPicker = function() {
var t;
if (!this.isClosed) return this.model.userTopics.length > 0 || this.isCurrentUser ? (t = new Mighty.Views.SpacePicker({
addLink:M.URLHelper.makeLinkPerSpace("community_topics_path", M.network),
collection:this.model.userTopics,
expandLink:M.URLHelper.makeLink("community_member_path", this.model, "topics"),
readOnly:!0,
showAddLink:this.isCurrentUser && !(this.model.userTopics.length > 0)
}), this.topicPickerRegion.show(t)) :(this.ui.topicsRow.hide(), this.topicPickerRegion.close());
}, i.prototype._loadMemberCircles = function() {
return this.model.circles.getFirstPageIfNeeded(this._showMemberCircles);
}, i.prototype._showMemberCircles = function() {
var t;
if (!this.isClosed) return this.model.circles.length > 0 || this.isCurrentUser ? (t = new Mighty.Views.SpacePicker({
addLink:M.URLHelper.makeLink("community_circles_path"),
collection:this.model.circles,
expandLink:M.URLHelper.makeLink("community_member_path", this.model, "groups"),
readOnly:!0,
showAddLink:this.isCurrentUser && !(this.model.circles.length > 0)
}), this.circlesRegion.show(t)) :(this.ui.circlesRow.hide(), this.circlesRegion.close());
}, i.prototype._loadMemberCourses = function() {
return this.model.courses.getFirstPageIfNeeded(this._showMemberCourses);
}, i.prototype._showMemberCourses = function() {
var t;
if (!this.isClosed) return this.model.courses.length > 0 || this.isCurrentUser ? (t = new Mighty.Views.SpacePicker({
addLink:M.URLHelper.makeLink("community_courses_path"),
collection:this.model.courses,
expandLink:M.URLHelper.makeLink("community_member_path", this.model, "courses"),
readOnly:!0,
showAddLink:this.isCurrentUser && !(this.model.courses.length > 0)
}), this.coursesRegion.show(t)) :(this.ui.coursesRow.hide(), this.coursesRegion.close());
}, i.prototype._handleFollowerCountChanged = function() {
return this._showFollowersCount();
}, i.prototype._handleRoleChanged = function() {
return this._showBadges();
}, i.prototype._loadMemberEvents = function() {
return this.model.events.getFirstPageIfNeeded(this._showMemberEvents);
}, i.prototype._showMemberEvents = function() {
return this.isClosed ? void 0 :this.model.events.isEmpty() ? (this.ui.eventsRow.hide(), 
this.eventsRegion.close()) :this.eventsRegion.show(new o.EventsList({
collection:this.model.events,
model:this.model
}));
}, i.prototype._showFollowersCount = function() {
return this.isClosed ? void 0 :this.followersCountRegion.show(new Mighty.Views.FollowersCount({
model:this.model
}));
}, i;
}(n.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("Views", function(e, o, n, i, r, s) {
return e.AboutUserHeader = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
avatar_image_url:M.ImageUtil.applyVersionToImageUrl(this.model.get("avatar_url"), "avatar_" + this.options.avatarSize),
text:this.model.get("short_bio"),
avatar_class:"mighty-avatar-user-" + this.options.avatarSize,
title:this.model.get("name"),
avatar_lightbox_url:M.ImageUtil.applyVersionToImageUrl(this.model.get("avatar_url"), "avatar_popout")
});
}, o.prototype.getActionsView = function() {
return this.model.isCurrentUser() ? !1 :new Mighty.Views.PrimaryMemberActions({
model:this.model,
buttonColor:"secondary",
followShowText:!0,
followFullButton:!0,
messageShowAsButton:!0
});
}, o.prototype.onShow = function() {
return this._setupContentMagnificLightbox();
}, o.prototype._setupContentMagnificLightbox = function() {
return M.Lightbox.prepareImagesForLightbox(this.$(".profile-image")), M.Lightbox.setUpMagnificLightbox(this.$(".mighty-avatar-user-" + this.options.avatarSize), {
noBox:!0
});
}, o;
}(Mighty.Views.AboutHeader);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.MemberProfile", function(e, o, n, i, r, s) {
return e.EventsList = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/member_profile/events_list", 
o.prototype.className = "member-profile-events-list-container", o.prototype.itemView = Mighty.Views.MiniEventListItem, 
o.prototype.itemViewContainer = ".member-profile-events-list", o.prototype.defaultOptions = function() {
return {
maxCount:10
};
}, o.prototype.initialize = function() {
return this.collection = new Mighty.Models.TopItemsCollection(null, {
collection:this.collection,
maxCount:this.options.maxCount
});
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
show_more:this.collection.hasMore()
});
}, o;
}(Mighty.Views.CompositeView);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("Views", function(e, o, n, i, r, s) {
return e.FollowersCount = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/member_profile/followers_count", 
o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
show_followers_link:this.model.hasFollowers()
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.MemberProfile", function(e, o, n, i, r, s) {
return this.Layout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/member_profile/layout", o.prototype.id = "community-member-profile", 
o.prototype.flyoutAdditionalClasses = "about-flyout", o.prototype.regions = {
headerRegion:"#community-member-profile-header-region",
aboutRegion:"#community-member-profile-about-region"
}, o.prototype.modelEvents = {
banned:"_handleBanned"
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
is_current_user:this.model.isCurrentUser()
});
}, o.prototype.onShow = function() {
var t, e;
return e = new Mighty.Views.AboutUserHeader({
model:this.model
}), this.headerRegion.show(e), t = new Mighty.CommunitiesApp.Views.MemberProfile.AboutLayout({
model:this.model,
autoFocus:this.options.autoFocus
}), this.aboutRegion.show(t);
}, o.prototype.getFlyoutBarView = function() {
return new Mighty.Views.MemberProfileBar({
model:this.model
});
}, o.prototype._handleBanned = function() {
return Mighty.navigate(M.URLHelper.makeLink("community_members_path"), {
replace:!0,
trigger:!0
});
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views", function(o, n, i, r, s, a) {
return this.MembersLayout = function(o) {
function n() {
return this._trackClickAnalytics = t(this._trackClickAnalytics, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.include(Mighty.Views.FlexSpacesHelper), n.prototype.template = "communities/members_layout", 
n.prototype.className = "container-members-all", n.prototype.regions = {
filterBarRegion:".filter-bar-region",
listRegion:".list-region"
}, n.prototype.initialize = function() {
return this.navTab = this.options.navTab;
}, n.prototype.onShow = function() {
var t, e;
return M.network.canInvite() && (e = M.URLHelper.makeLink("community_invite_path")), 
"members-near-you" === this.navTab ? this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:this.model.membersNearYou,
emptyViewText:this._getEmptyViewTextMemberListNearYou(e)
}))) :"new-members" === this.navTab ? this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:this.model.newMembers,
emptyViewText:this._getEmptyViewTextMemberListNew(e)
}))) :"top-members" === this.navTab ? this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:this.model.topMembers,
emptyViewText:this._getEmptyViewTextMemberListTop(e)
}))) :"hosts" === this.navTab ? this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:this.model.hosts
}))) :"ambassadors" === this.navTab ? this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:this.model.ambassadors,
emptyViewText:trl("The Ambassador program is just getting started!"),
enableOthersAmbassadorLink:this.options.enableOthersAmbassadorLink,
enableAmbassadorLink:!1
}))) :"online-members" === this.navTab && (t = {
space:this.model
}, this.model.getOwningSpace().get("id") !== this.model.get("id") && (t.filterTagIds = [ this.model.get("id") ]), 
this.listRegion.show(new Mighty.Views.MemberList(a.extend({}, this.options, {
model:this.model,
collection:new Mighty.Models.SpaceOnlineMembers(null, t),
emptyViewText:this._getEmptyViewTextMemberListOnline(e)
})))), this.filterBarRegion.show(new Mighty.CommunitiesApp.MembersFilterBar(a.extend({}, this.options, {
model:this.model,
navTab:this.navTab
})));
}, n.prototype._getTitleBarView = function() {
return M.network.isEnabledFeature("flex_spaces") ? this._getFlexSpacesTitleBar() :new Mighty.Views.TitleBar({
title:trl("Members"),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableSecondaryButton:this.model.canInvite(),
primaryButtonLink:this.model.pageLink("settings/members"),
primaryButtonText:trl("Manage"),
secondaryButtonLink:this.model.pageLink("invite"),
secondaryButtonCallback:this._trackClickAnalytics,
secondaryButtonUseLinkAndCallback:!0,
secondaryButtonText:trl("Invite"),
secondaryButtonClasses:"mighty-btn-filled-theme-color-button mighty-btn-square-toggle-small-tiny"
});
}, n.prototype._getEmptyViewTextMemberListOnline = function(t) {
return "string" == typeof t && t.length > 0 ? tr("No one is online! [internalLink: Invite members to join?]", {
internalLink:{
href:t,
"class":"navigate"
}
}) :trl("No one is online!");
}, n.prototype._getEmptyViewTextMemberListTop = function(t) {
return "string" == typeof t && t.length > 0 ? tr("We're just getting started! [internalLink: Invite members to join?]", {
internalLink:{
href:t,
"class":"navigate"
}
}) :trl("We're just getting started!");
}, n.prototype._getEmptyViewTextMemberListNew = function(t) {
return "string" == typeof t && t.length > 0 ? tr("We're just getting started! [internalLink: Invite members to join?]", {
internalLink:{
href:t,
"class":"navigate"
}
}) :trl("We're just getting started!");
}, n.prototype._getEmptyViewTextMemberListNearYou = function(t) {
return "string" == typeof t && t.length > 0 ? tr("Darn. There aren't any members near you yet. [internalLink: Invite members to join?]", {
internalLink:{
href:t,
"class":"navigate"
}
}) :trl("Darn. There aren't any members near you yet.");
}, n.prototype._trackClickAnalytics = function() {
return M.Analytics.recordEvent("clicked invite button on members", {
action:"click",
object:{
id:this.model.id,
type:"space"
}
});
}, n;
}(n.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals", function(e, o, n, i, r, s) {
return e.BackfillBackstory = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/backfill_backstory", 
o.prototype.className = "backfill-backstory-modal", o.prototype.regions = {
listRegion:".list-region"
}, o.prototype.initialize = function() {
return this.listenTo(this.model.networkBackstories, "selected deselected", this._optionSelected);
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.CheckboxListView({
collection:this.model.networkBackstories,
checkboxGroupName:"network-backstory"
})), this.trigger("checkSubmitStatus");
}, o.prototype._getData = function() {
var t;
return (t = this.model.networkBackstories.selected()) ? {
backstory:t.id
} :{};
}, o.prototype._optionSelected = function() {
return this.trigger("checkSubmitStatus");
}, o.prototype.modalCanProceed = function(t) {
return t(!!this.model.networkBackstories.selected());
}, o.prototype.onSuccess = function() {
return Mighty.closeModal();
}, o;
}(Mighty.Views.BaseForm);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals.Calendar", function(e, o, n, i, r, s) {
return e.AddToCalendar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/calendar/add_to_calendar", 
o.prototype.className = "add-to-calendar-layout modal-container calendar-modal", 
o.prototype.ui = {
googleCalendarButton:".google-calendar-button",
appleCalendarButton:".apple-calendar-button",
outlookCalendarButton:".outlook-calendar-button",
syncCalendarButton:".sync-calendar-button"
}, o.prototype.events = {
"click @ui.googleCalendarButton":"_handleGoogleCalendarButtonClick",
"click @ui.appleCalendarButton":"_handleAppleCalendarButtonClick",
"click @ui.outlookCalendarButton":"_handleOutlookCalendarButtonClick",
"click @ui.syncCalendarButton":"_handlesyncCalendarButton"
}, o.prototype.initialize = function() {
return this.space = this.options.space || this.model.getOwningSpace();
}, o.prototype.serializeData = function() {
return {
space_title:this.space.getTitle(),
disable_google:this.model.isRecurringEvent(),
tooltip_title:trl("Google doesn't support adding a Repeat Event to your calendar. Instead, try downloading the .ics file or syncing all events from {space_title} to your calendar.", {
space_title:this.space.getTitle()
}),
ics_download_url:this.model.getCurrentEventInstanceDownloadUrl(),
file_name:this.model.getTitle() + ".ics"
};
}, o.prototype.onShow = function() {
return this.showTooltips();
}, o.prototype._handleGoogleCalendarButtonClick = function(t) {
return this.model.isRecurringEvent() ? void 0 :(t.preventDefault(), this.model.openGoogleCalendarLink());
}, o.prototype._handleAppleCalendarButtonClick = function(t) {
var e;
return t.preventDefault(), e = {
title:trl("Add to Your Apple Calendar"),
firstStepLabel:trl("Download the iCS File."),
secondStepLabel:trl("Open the downloaded file, and it will automatically open your default calendar app."),
thirdStepLabel:trl("If Apple Calendar is not your default calendar app, [bold: open Apple Calendar], go to [bold: File [greaterThanSymbol: Import]], and choose the downloaded file."),
confirmedCallback:function(t) {
return function() {
return window.open(t.model.getCurrentEventInstanceDownloadUrl());
};
}(this)
}, Mighty.CommunitiesApp.ModalManager.showAddToExternalCalendarModal(this.model, e);
}, o.prototype._handleOutlookCalendarButtonClick = function(t) {
var e;
return t.preventDefault(), e = {
title:trl("Add to Your Outlook Calendar"),
firstStepLabel:trl("Download the iCS File."),
secondStepLabel:trl("Open Outlook and go to [bold: File [greaterThanSymbol: Open] & Export [greaterThanSymbol: Import/Export].]"),
thirdStepLabel:trl("In the Import and Export Wizard select [bold: Import an iCalendar (.ics) or vCalendar file (.vcs)]. You can then choose to keep it a separate calendar or make it a new calendar."),
confirmedCallback:function(t) {
return function() {
return window.open(t.model.getCurrentEventInstanceDownloadUrl());
};
}(this)
}, Mighty.CommunitiesApp.ModalManager.showAddToExternalCalendarModal(this.model, e);
}, o.prototype._handlesyncCalendarButton = function() {
return Mighty.CommunitiesApp.ModalManager.showSyncToCalendarModal(this.space);
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals.Calendar", function(e, o, n, i, r, s) {
return e.AddToExternalCalendarModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/calendar/add_to_external_calendar", 
o.prototype.className = "add-to-external-calendar-container", o.prototype.defaultOptions = function() {
return {
title:null,
firstStepLabel:null,
secondStepLabel:null,
thirdStepLabel:null
};
}, o.prototype.serializeData = function() {
return {
title:this.options.title,
first_step_label:this.options.firstStepLabel,
second_step_label:this.options.secondStepLabel,
third_step_label:this.options.thirdStepLabel
};
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals.Calendar", function(e, o, n, i, r, s) {
return e.RecurringAddToCalendarChoice = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/calendar/recurring_add_to_calendar_choice", 
o.prototype.className = "recurring-event-input-modal modal-container", o.prototype.ui = {
singleEvent:"#single-event",
submitButton:".submit-button"
}, o.prototype.events = {
"click @ui.submitButton":"_handleRecurringEventOptionChange"
}, o.prototype.initialize = function() {
return this.space = this.options.space || this.model.getOwningSpace();
}, o.prototype._handleRecurringEventOptionChange = function() {
return this.ui.singleEvent.prop("checked") ? Mighty.CommunitiesApp.ModalManager.showAddToCalendarModal(this.model, {
space:this.space
}) :Mighty.CommunitiesApp.ModalManager.showSyncToCalendarModal(this.space);
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals.Calendar", function(e, o, n, i, r, s) {
return e.SyncToCalendarModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/calendar/sync_to_calendar", 
o.prototype.className = "sync-to-calendar-layout modal-container calendar-modal", 
o.prototype.ui = {
googleCalendarButton:".google-calendar-button",
appleCalendarButton:".apple-calendar-button",
outlookCalendarButton:".outlook-calendar-button",
syncToCalendarModalSelectableOption:"#sync-to-calendar-selectable-options",
allEvents:"#all_events"
}, o.prototype.events = {
"click @ui.googleCalendarButton":"_handleGoogleCalendarButtonClick",
"click @ui.appleCalendarButton":"_handleAppleCalendarButtonClick",
"click @ui.outlookCalendarButton":"_handleOutlookCalendarButtonClick"
}, o.prototype._handleGoogleCalendarButtonClick = function(t) {
return t.preventDefault(), window.open(this.model.getCurrentUserMembership().getCalendarLink(this.ui.allEvents.prop("checked"), !0));
}, o.prototype._handleAppleCalendarButtonClick = function(t) {
var e;
return t.preventDefault(), e = {
title:trl("Sync With Your Apple Calendar"),
firstStepLabel:trl("Copy the link below."),
secondStepLabel:trl("In Apple Calendar, go to [bold: File &gt New Calendar Subscription]"),
thirdStepLabel:trl("Paste the link above into the [bold: Calender URL] field and select [bold: Subscribe.]"),
copyLink:this.model.getCurrentUserMembership().getCalendarLink(this.ui.allEvents.prop("checked"), !1)
}, Mighty.CommunitiesApp.ModalManager.showSyncWithExternalCalendarModal(this.model, e);
}, o.prototype._handleOutlookCalendarButtonClick = function(t) {
var e;
return t.preventDefault(), e = {
title:trl("Sync With Your Outlook Calendar"),
firstStepLabel:trl("Copy the link below."),
secondStepLabel:trl("In Outlook, right click on the [bold: My Calendars] dropdown in the calendar view. Select [bold: Add Calendar &gt From Internet.]"),
thirdStepLabel:trl("Paste the link above into the [bold: Calender URL] field and select [bold: OK.]"),
copyLink:this.model.getCurrentUserMembership().getCalendarLink(this.ui.allEvents.prop("checked"), !1)
}, Mighty.CommunitiesApp.ModalManager.showSyncWithExternalCalendarModal(this.model, e);
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals.Calendar", function(e, o, n, i, r, s) {
return e.SyncWithExternalCalendarModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/calendar/sync_with_external_calendar", 
o.prototype.className = "sync-with-external-calendar-container", o.prototype.regions = {
copyLinkRegion:".copy-link-region"
}, o.prototype.defaultOptions = function() {
return {
title:null,
firstStepLabel:null,
secondStepLabel:null,
thirdStepLabel:null,
copyLink:null
};
}, o.prototype.serializeData = function() {
return {
title:this.options.title,
first_step_label:this.options.firstStepLabel,
second_step_label:this.options.secondStepLabel,
third_step_label:this.options.thirdStepLabel
};
}, o.prototype.onShow = function() {
return this.copyLinkRegion.show(new Mighty.Views.CopyContent({
model:this.model,
copyButtonText:trl("Copy"),
copyContent:this.options.copyLink,
showBorderBottom:!1
}));
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals", function(e, o, n, i, r, s) {
return e.DuplicatePostConfirmation = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/duplicate_post_confirmation", 
o.prototype.className = "duplicate-post-confirmation-modal", o.prototype.serializeData = function() {
return {
is_section:this.model.isCourseSection(),
is_lesson:this.model.isCourseLesson(),
display_name:this.model.displayName(),
section_silo_name:this.model.getOwningSpace().siloName("section"),
lesson_silo_name:this.model.getOwningSpace().siloName("lesson"),
lesson_plural_silo_name:this.model.getOwningSpace().siloPluralName("lesson"),
student_silo_name:this.model.getOwningSpace().siloName("student")
};
}, o;
}(o.Views.ItemView);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals", function(e, o, n, i, r, s) {
return e.DuplicateSpaceConfirmation = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/duplicate_space_confirmation", 
o.prototype.className = "duplicate-space-confirmation-modal", o.prototype.serializeData = function() {
return {
space_silo_name:this.model.displayName(),
section_plural_silo_name:this.model.siloPluralName("section"),
lesson_silo_name:this.model.siloName("lesson"),
section_silo_name:this.model.siloName("section"),
lesson_plural_silo_name:this.model.siloPluralName("lesson"),
instructor_plural_silo_name:this.model.siloPluralName("instructor"),
student_plural_silo_name:this.model.siloPluralName("student")
};
}, o;
}(o.Views.ItemView);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Views.Modals", function(e, o, n, i, r, s) {
return e.DuplicateSpacePostScope = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/duplicate_space_post_scope", 
o.prototype.className = "duplicate-space-post-scope-modal", o.prototype.ui = {
options:"#posts-options"
}, o.prototype.serializeData = function() {
return {
space_silo_name:this.model.displayName(),
instructor_silo_name:this.model.siloName("instructor"),
instructor_plural_silo_name:this.model.siloPluralName("instructor")
};
}, o.prototype.getValue = function() {
return this.ui.options.find("input:checked").val();
}, o;
}(o.Views.ItemView);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("Views", function(e, o, n, i, r, s) {
return e.ZoomEventSyncConflictModal = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/modals/zoom_event_sync_conflict_modal", 
o.prototype.className = "zoom-event-sync-conflict-modal align-left font-size-18 text-color-red", 
o.prototype.tagName = "ul", o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp.Notifications", function(e, o, n, i, r, s) {
return e.MembersLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.id = "notifications-member-layout", o.prototype.template = "communities/notifications/members_layout", 
o.prototype.regions = {
listRegion:".list-region"
}, o.prototype.onShow = function() {
var t;
return t = new Mighty.Views.MemberList({
collection:this.model.members,
emptyView:Mighty.Views.MemberListEmpty
}), this.listRegion.show(t);
}, o.prototype._getTitleBarView = function() {
var t, e;
return t = M.URLHelper.makeLink("community_members_path"), e = trl("View All Members"), 
this.model.isSpaceMemberJoinNotification() && (t = M.URLHelper.makeLink("community_members_settings_path", "welcome"), 
e = trl("Go Welcome Members")), new Mighty.Views.TitleBar({
title:this.model.get("plain_text"),
superTitle:trl("Notification"),
enablePrimaryButton:!0,
primaryButtonLink:t,
primaryButtonText:e
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SpacePageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype._filterAllowedTab = function(t) {
return this.model.getOwningSpace().isAllowedTab(t) ? t :"home";
}, o.prototype._getViewForTab = function(t, e) {
var o;
switch (null == e && (e = {}), s.extend(e, {
model:e.model || this.model,
tab:t
}), t) {
case "home":
return new Mighty.Views.SegmentationLayout(e);

case "content":
return new Mighty.CommunitiesApp.CourseContentLayout(e);

case "discovery":
return new Mighty.Views.DiscoveryGroups(s.extend(e, {
collection:this.model.discoveryGroups
}));

case "events":
switch (e.navTab) {
case "nearby-events":
o = this.model.nearbyEventInstances;
break;

case "past-events":
o = this.model.pastEventInstances;
break;

case "yours-events":
o = this.model.userEventInstances;
break;

case "day-events":
if (!e.dayIndex) throw "This needs to have day index";
o = this.model.getEventInstanceCollectionForDay(e.dayIndex);
break;

case "event-list":
if (!e.post) throw "This needs to have the selected Event";
o = e.post.eventInstances;
break;

default:
o = this.model.upcomingEventInstances;
}
return new Mighty.CommunitiesApp.EventsLayout(s.extend(e, {
collection:o
}));

case "calendar":
return o = e.mine ? this.model.myCalendarInstances :this.model.calendarInstances, 
new Mighty.CommunitiesApp.Calendar.EventsCalendarLayout(s.extend(e, {
collection:o
}));

case "featured_posts":
return new Mighty.CommunitiesApp.PinsLayout(s.extend(e, {
collection:this.model.featuredItems,
title:this.model.featuredItems.displayName(),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
primaryButtonLink:this.model.pageLink("settings/content-tools/featured")
}));

case "welcome_posts":
return new Mighty.CommunitiesApp.PinsLayout(s.extend(e, {
collection:this.model.welcomeItems,
title:this.model.welcomeItems.displayName(),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
primaryButtonLink:this.model.pageLink("settings/content-tools/welcome")
}));

case "topics":
return new Mighty.CommunitiesApp.TopicsLayout(e);

case "topic":
return new Mighty.Views.SegmentationLayout(e);

case "contentTools":
return new Mighty.CommunitiesApp.Settings.ContentTools.Layout(e);

default:
return console.error("Cannot find Space Page View for " + t);
}
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CirclePageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "circle-layout", o;
}(e.SpacePageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.CoursePageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "course-layout", o;
}(e.SpacePageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.FlexSpacePageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "space-layout", o.prototype._filterAllowedTab = function(t) {
return o.__super__._filterAllowedTab.apply(this, arguments);
}, o.prototype._getViewForTab = function(t, e) {
var o;
switch (null == e && (e = {}), s.extend(e, {
model:e.model || this.model,
tab:t
}), t) {
case "members-near-you":
case "new-members":
case "top-members":
case "hosts":
case "ambassadors":
case "online-members":
return new Mighty.CommunitiesApp.Views.MembersLayout(s.extend(e, {
enableOthersAmbassadorLink:M.network.currentUserIsHost()
}));

case "events":
switch (e.navTab) {
case "nearby-events":
o = this.model.nearbyEventInstances;
break;

case "past-events":
o = this.model.pastEventInstances;
break;

case "yours-events":
o = this.model.userEventInstances;
break;

case "day-events":
if (!e.dayIndex) throw "This needs to have day index";
o = this.model.getEventInstanceCollectionForDay(e.dayIndex);
break;

case "event-list":
if (!e.post) throw "This needs to have the selected Event";
o = e.post.eventInstances;
break;

default:
o = this.model.upcomingEventInstances;
}
return new Mighty.CommunitiesApp.EventsLayout(s.extend(e, {
collection:o
}));

case "calendar":
return o = e.mine ? this.model.myCalendarInstances :this.model.calendarInstances, 
new Mighty.CommunitiesApp.Calendar.EventsCalendarLayout(s.extend(e, {
collection:o
}));

case "event-calendar":
return new Mighty.CommunitiesApp.Calendar.EventCalendarLayout(s.extend(e, {
collection:e.model.eventCalendarInstances
}));

case "content":
return new Mighty.CommunitiesApp.FlexSpaceCourseContent(e);

case "chat":
return new Mighty.CommunitiesApp.Views.FlexSpaceChatLayout(s.extend(e, {
model:this.model,
conversation:e.conversation
}));

case "spaces_page":
return new Mighty.CommunitiesApp.Views.FlexSpacePageEditorLayout(s.extend(e, {
model:this.model
}));

case "home":
case "feed":
case "list":
return new Mighty.Views.SegmentationLayout(e);
}
}, o;
}(e.SpacePageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.FlexSpacesCollectionPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype._showTitleBar = function(t) {
return null == t && (t = {}), this.headerRegion.renderReactComponent("FlexSpaceHeader", {
options:{
enablePrimaryButton:!1,
title:t.model.get("name"),
subTitle:t.model.get("description"),
enableActionRegion:!1,
isCollection:!0
},
model:t.model
});
}, o.prototype._getViewForTab = function(t, e) {
var o;
return null == e && (e = {}), o = e.model || this.model, s.extend(e, {
model:o,
tab:t,
collection:o.flexSpaces
}), new Mighty.CommunitiesApp.FlexSpacesCollectionDirectoryLayout(e);
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.MemberPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "segment-layout", o.prototype._getViewForTab = function(t, e) {
return null == e && (e = {}), s.extend(e, {
model:this.model,
tab:t
}), new Mighty.Views.MemberLayout(e);
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.NetworkPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "network-layout", o.prototype.isNetworkFeed = function() {
var t;
return "feed" === (t = this.tab) || "list" === t;
}, o.prototype._filterAllowedTab = function(t) {
return this.model.isAllowedTab(t) ? t :"home";
}, o.prototype._getViewForTab = function(t, e) {
var o;
switch (null == e && (e = {}), s.extend(e, {
model:e.model || this.model,
tab:t
}), t) {
case "home":
case "feed":
case "list":
return new Mighty.CommunitiesApp.FeedLayout(s.extend(e, {
collection:this.model.feed
}));

case "all-posts":
return new Mighty.CommunitiesApp.PostsLayout(s.extend(e, {
collection:this.model.posts,
title:trl("All Posts")
}));

case "drafts":
return new Mighty.CommunitiesApp.PostsLayout(s.extend(e, {
collection:this.model.drafts,
title:trl("Saved Drafts")
}));

case "scheduled-posts":
switch (e.navTab) {
case "yours":
o = M.currentUser.scheduledPosts;
break;

default:
o = this.model.scheduledPosts;
}
return new Mighty.CommunitiesApp.PostsLayout(s.extend(e, {
collection:o,
title:trl("Scheduled Posts")
}));

case "featured":
return new Mighty.CommunitiesApp.PinsLayout(s.extend(e, {
collection:this.model.featuredItems,
title:this.model.featuredItems.displayName(),
enablePrimaryButton:this.model.currentUserIsHost(),
primaryButtonLink:this.model.pageLink("settings/content-tools/featured")
}));

case "welcome":
return new Mighty.CommunitiesApp.PinsLayout(s.extend(e, {
collection:this.model.welcomeItems,
title:this.model.welcomeItems.displayName(),
enablePrimaryButton:this.model.currentUserIsHost(),
primaryButtonLink:this.model.pageLink("settings/content-tools/welcome")
}));

case "events":
switch (e.navTab) {
case "nearby-events":
o = this.model.nearbyEventInstances;
break;

case "past-events":
o = this.model.pastEventInstances;
break;

case "yours-events":
o = this.model.userEventInstances;
break;

case "day-events":
if (!e.dayIndex) throw "This needs to have day index";
o = this.model.getEventInstanceCollectionForDay(e.dayIndex);
break;

case "event-list":
if (!e.post) throw "This needs to have the selected Event";
o = e.post.eventInstances;
break;

default:
o = this.model.upcomingEventInstances;
}
return new Mighty.CommunitiesApp.EventsLayout(s.extend(e, {
collection:o
}));

case "calendar":
return o = e.mine ? this.model.myCalendarInstances :this.model.calendarInstances, 
new Mighty.CommunitiesApp.Calendar.EventsCalendarLayout(s.extend(e, {
collection:o
}));

case "event-calendar":
return new Mighty.CommunitiesApp.Calendar.EventCalendarLayout(s.extend(e, {
collection:e.model.eventCalendarInstances
}));

case "members":
return new Mighty.CommunitiesApp.Views.MembersLayout(s.extend(e, {
enableOthersAmbassadorLink:M.network.currentUserIsHost()
}));

case "styleguide":
return new Mighty.CommunitiesApp.Views.StyleGuideLayout(e);

case "referred-members":
return new Mighty.Views.ReferredMembers(e);

case "coursework-instructors":
return new Mighty.Views.Detail.InstructorsLayout(e);

case "poll-answerers":
return new Mighty.Views.Detail.PollAnswerersLayout(e);

case "notification-members":
return new Mighty.CommunitiesApp.Notifications.MembersLayout(s.extend(e, {
model:e.notification
}));

case "event-rsvp-yes-members":
return new Mighty.Views.Detail.RSVPMembersLayout({
model:e.model,
collection:e.model.rsvpYes
});

case "event-rsvp-maybe-members":
return new Mighty.Views.Detail.RSVPMembersLayout({
model:e.model,
collection:e.model.rsvpMaybes
});

case "event-rsvp-no-members":
return new Mighty.Views.Detail.RSVPMembersLayout({
model:e.model,
collection:e.model.rsvpNos
});

case "event-rsvp-none-members":
return new Mighty.Views.Detail.RSVPMembersLayout({
model:e.model,
collection:e.model.rsvpNone
});

case "spaces":
return new Mighty.CommunitiesApp.Views.CirclesLayout(e);

case "circles":
return new Mighty.CommunitiesApp.Views.CirclesLayout(e);

case "courses":
return new Mighty.CommunitiesApp.Views.CoursesLayout(e);

case "segments":
return new Mighty.CommunitiesApp.SegmentsLayout(e);

case "segmentsEdit":
return new Mighty.CommunitiesApp.Settings.Members.Segments.Edit(e);

case "topics":
return new Mighty.CommunitiesApp.TopicsLayout(e);

case "recordings":
return new Mighty.CommunitiesApp.VideoRecordingsLayout(e);

case "discovery":
return new Mighty.Views.DiscoveryGroups(s.extend(e, {
collection:this.model.discoveryGroups
}));

case "announcement-posts":
return new Mighty.CommunitiesApp.AnnouncementsLayout(e);

case "saved-posts":
return new Mighty.CommunitiesApp.UserSavedPostsLayout(s.extend(e, {
collection:M.currentUser.savedPosts
}));

default:
return "private" !== t && "_=_" !== t && console.error("Cannot find Network View for '" + t + "' on URL " + window.location + "'"), 
Mighty.navigateFallback(M.URLHelper.makeLink("community_path")), null;
}
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.RecordingPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "recording-layout", o.prototype._getViewForTab = function(t, e) {
switch (null == e && (e = {}), s.extend(e, {
model:this.model,
tab:t
}), t) {
case "home":
return new Mighty.Views.SegmentationLayout(e);
}
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SegmentPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "segment-layout", o.prototype._getViewForTab = function(t, e) {
switch (null == e && (e = {}), s.extend(e, {
model:this.model,
tab:t
}), t) {
case "home":
return new Mighty.Views.SegmentationLayout(e);
}
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.TopicPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "topic-layout", o.prototype._getViewForTab = function(t, e) {
switch (null == e && (e = {}), s.extend(e, {
model:this.model,
tab:t
}), t) {
case "home":
return new Mighty.Views.SegmentationLayout(e);
}
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsBundlesFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "with-item-dropdowns", o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
lightTheme:!0,
hasDropdownFilters:!0
});
}, o.prototype.getDefaultFilter = function() {
var t;
return t = this.tabs.filter(function(t) {
return "deactivated" !== t.id;
}), t.map(function(t) {
return t.id;
});
}, o.prototype.isDefaultFilter = function() {
var t, e;
return t = s.sortBy(this.getDefaultFilter(), function(t) {
return t;
}), e = s.sortBy(this.tabs.selected(), function(t) {
return t.id;
}), e.length !== t.length ? !1 :e.every(function(e, o) {
return e.id === t[o];
});
}, o.prototype.hasEverythingFilter = function() {
return this.tabs.selected().length === this.tabs.models.length;
}, o.prototype.getDeselectedFilterCount = function() {
return this.tabs.models.length - this.tabs.selected().length;
}, o.prototype.selectTab = function(t) {
var e;
return null != (e = this.tabs.get(t)) ? e.select() :void 0;
}, o.prototype._setupGroupedTabs = function() {
return this._addGroupedTab("all", trl("All")), this._addGroupedTab("status", trl("Status")), 
this._addGroupedTab("audience", trl("Audience")), this._addGroupedTab("plan_type", trl("Plan Type")), 
this._addGroupedTab("pricing_type", trl("Pricing Type"));
}, o.prototype._setupTabs = function() {
return this._addTab("visible", trl("Visible"), {
filterType:"status"
}), this._addTab("hidden", trl("Hidden"), {
filterType:"status"
}), this._addTab("pending", trl("Pending"), {
filterType:"status"
}), this._addTab("deactivated", trl("Deactivated"), {
filterType:"status"
}), this._addTab("external", trl("External"), {
filterType:"audience"
}), this._addTab("internal", trl("Internal"), {
filterType:"audience"
}), this._addTab("single", trl("Network"), {
filterType:"plan_type"
}), this.model.isEnabledFeature("courses") && this._addTab("courses", M.network.siloPluralName("course"), {
filterType:"plan_type"
}), this.model.isEnabledFeature("circles") && this._addTab("circles", M.network.siloPluralName("circle"), {
filterType:"plan_type"
}), this._addTab("bundles", trl("Bundles"), {
filterType:"plan_type"
}), this._addTab("free", trl("Free"), {
filterType:"pricing_type"
}), this._addTab("paid", trl("Paid"), {
filterType:"pricing_type"
}), this._addTab("one-time", trl("One-Time Payment"), {
filterType:"pricing_type"
}), this._addTab("subscription", trl("Subscription"), {
filterType:"pricing_type"
});
}, o.prototype._addTab = function(t, e, o) {
var n;
return null == o && (o = {}), n = "all" === t ? "" :t, this.addTab(t, M.URLHelper.makeLinkWithQuerystring("community_settings_payments_plans_path", this.filterState.getQuery(n)), e, e, o);
}, o.prototype._addGroupedTab = function(t, e, o) {
var n;
return null == o && (o = {}), n = "all" === t ? "" :t, this.addGroupedTab(t, M.URLHelper.makeLinkWithQuerystring("community_settings_payments_plans_path", this.filterState.getQuery(n)), e, e, o);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsBundlesFilterLayout = function(o) {
function n() {
return n.__super__.constructor.apply(this, arguments);
}
return t(n, o), n.prototype.filterBarView = e.PaymentsBundlesFilterBar, n.prototype.className = "payments-bundles-filter-layout", 
n.prototype.defaultOptions = function() {
return s.extend(n.__super__.defaultOptions.apply(this, arguments), {
enableSort:!0,
useSortOrder:!0,
preExpand:!1,
showListToggle:!1,
showSearchInput:!0,
allowMultiselect:!0,
searchPlaceholder:trl("Search Plans"),
withSearchFilterBarAlignment:!0,
preventActiveToggle:!0
});
}, n.prototype.filterBarOptions = function() {
return s.extend(n.__super__.filterBarOptions.apply(this, arguments), {
model:this.model,
collection:this.collection,
navTab:this.options.navTab
});
}, n.prototype._setFilterTitle = function() {
var t, e, o, n;
if (!this.isClosed) return e = this.filterBarRegion.currentView.getSelectedTabs(), 
this.options.allowMultiselect ? (t = this.filterBarRegion.currentView.getDeselectedFilterCount(), 
n = this._isDefaultFilter() ? trl("Showing [bold: Default]") :(null != (o = this.filterBarRegion.currentView) ? o.hasEverythingFilter() :void 0) ? trl("Showing [bold: All]") :1 === e.length ? trl("Showing [bold: {filter}]", {
filter:e[0].get("title")
}) :trl("Showing [bold: {count} filters]", {
count:t
})) :n = trl("Showing [bold: {title}]", {
title:e.get("title")
}), this.ui.filterSelectionSummary.html(n), this.ui.showMoreToggle.toggleClass("mighty-btn-filled-grey-7 text-color-light", this._isDefaultFilter()), 
this.ui.showMoreToggle.toggleClass("is-custom-filtered mighty-btn-filled-theme-color-button", !this._isDefaultFilter());
}, n.prototype._getSortSelectOptions = function() {
return M.network.getBundlesFilterSortOptions();
}, n.prototype._isDefaultFilter = function() {
var t;
return null != (t = this.filterBarRegion.currentView) ? t.isDefaultFilter() :void 0;
}, n;
}(Mighty.Views.BaseFilterLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsCurrenciesFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
lightTheme:!0
});
}, o.prototype._setupTabs = function() {
return this._addTab("all", trl("All Currencies")), this._addTab("visible", trl("Visible")), 
this._addTab("hidden", trl("Hidden")), this._addTab("with_buyers", trl("Purchased")), 
this._addTab("settlement", trl("Settlement")), this._addTab("presentment", trl("Presentment"));
}, o.prototype._addTab = function(t, e) {
var o;
return o = "all" === t ? "" :t, this.addTab(t, M.URLHelper.makeLinkWithQuerystring("community_settings_payments_currencies_path", this.filterState.getQuery(o)), e, e);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsCurrenciesFilterLayout = function(o) {
function n() {
return n.__super__.constructor.apply(this, arguments);
}
return t(n, o), n.prototype.filterBarView = e.PaymentsCurrenciesFilterBar, n.prototype.className = "mighty-max-page-width", 
n.prototype.defaultOptions = function() {
return s.extend(n.__super__.defaultOptions.apply(this, arguments), {
enableSort:!0,
useSortOrder:!0,
preExpand:!1,
showListToggle:!1,
allowMultiselect:!0
});
}, n.prototype.filterBarOptions = function() {
return s.extend(n.__super__.filterBarOptions.apply(this, arguments), {
model:this.model,
collection:this.collection,
navTab:this.options.navTab
});
}, n.prototype._getSortSelectOptions = function() {
return M.network.getCurrenciesFilterSortOptions();
}, n;
}(Mighty.Views.BaseFilterLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsPastDueFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
lightTheme:!0,
includeSubSpaceFilters:!0
});
}, o.prototype._setupTabs = function() {
return this._addTab("all", trl("Everything")), this._addTab("external", trl("External")), 
this._addTab("internal", trl("Internal")), this.options.includeSubSpaceFilters && (this.model.isEnabledFeature("courses") && this._addTab("courses", M.network.siloPluralName("course")), 
this.model.isEnabledFeature("circles") && this._addTab("circles", M.network.siloPluralName("circle"))), 
this._addTab("bundles", trl("Bundles"));
}, o.prototype._addTab = function(t, e) {
var o;
return o = "all" === t ? "" :t, this.addTab(t, M.URLHelper.makeLinkWithQuerystring("community_settings_payments_past_due_path", this.filterState.getQuery(o)), e, e);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PaymentsPastDueFilterLayout = function(o) {
function n() {
return n.__super__.constructor.apply(this, arguments);
}
return t(n, o), n.prototype.filterBarView = e.PaymentsPastDueFilterBar, n.prototype.className = "payments-past-due-filter-layout", 
n.prototype.defaultOptions = function() {
return s.extend(n.__super__.defaultOptions.apply(this, arguments), {
enableSort:!0,
useSortOrder:!0,
preExpand:!1,
showListToggle:!1,
showSearchInput:!0,
allowMultiselect:!0,
searchPlaceholder:trl("Search Members"),
includeSubSpaceFilters:!0
});
}, n.prototype.filterBarOptions = function() {
return s.extend(n.__super__.filterBarOptions.apply(this, arguments), {
model:this.model,
collection:this.collection,
navTab:this.options.navTab,
includeSubSpaceFilters:this.options.includeSubSpaceFilters
});
}, n.prototype._getSortSelectOptions = function() {
return M.network.getPastDueSortOptions();
}, n;
}(Mighty.Views.BaseFilterLayout);
});
}.call(this), function() {
var t = function(t, e) {
return function() {
return t.apply(e, arguments);
};
}, e = function(t, e) {
function n() {
this.constructor = t;
}
for (var i in e) o.call(e, i) && (t[i] = e[i]);
return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, 
t;
}, o = {}.hasOwnProperty;
this.Mighty.module("Views", function(o, n, i, r, s, a) {
return o.PersonalLink = function(o) {
function n() {
return this._getIconImageLink = t(this._getIconImageLink, this), n.__super__.constructor.apply(this, arguments);
}
return e(n, o), n.prototype.defaultOptions = function() {
return a.extend(n.__super__.defaultOptions.apply(this, arguments), {
serverSideFetchingEnabled:!0,
validateOnKeyUp:!1
});
}, n.prototype.getData = function() {
return this.ui.linkInput.val() ? this.model.get("id") :void 0;
}, n.prototype._getIconImageLink = function(t) {
return t(null, this.model.get("favicon_url"));
}, n.prototype._fetchLink = function(t, e) {
return M.eventBus.trigger("validationFetch:start"), M.EmbedlyManager.process(t, "personal_link", {
success:function(t) {
return function(e) {
return t.model.set(e.attributes);
};
}(this),
error:function(t) {
return function() {
return M.FormValidator.showTextError(null, trl("Whoops! Something went wrong. Is this a valid URL?"), !1, t.$el);
};
}(this),
complete:function() {
return e(), M.eventBus.trigger("validationFetch:end");
}
});
}, n.prototype.setValue = function(t, e) {
return this.ui.linkInput.val(e), this._setIconImageLinkIfNeeded(t);
}, n;
}(Mighty.Views.SmartLink);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PinsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/pins_layout", o.prototype.id = "pins-layout", 
o.prototype.preserveScrolling = !0, o.prototype.regions = {
listRegion:"#list-region"
}, o.prototype.defaultOptions = function() {
return {
enablePrimaryButton:!1,
primaryButtonLink:null,
primaryButtonText:trl("Manage")
};
}, o.prototype.onShow = function() {
return this._showList();
}, o.prototype._getTitleBarView = function() {
return this.options.title ? new Mighty.Views.TitleBar({
title:this.options.title,
enablePrimaryButton:this.options.enablePrimaryButton,
primaryButtonLink:this.options.primaryButtonLink,
primaryButtonText:this.options.primaryButtonText
}) :void 0;
}, o.prototype._showList = function() {
var t;
return t = new Mighty.Views.PinList({
collection:this.collection
}), this.listRegion.show(t);
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.PrivacyInfoWidget = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/privacy_info_widget", o.prototype.className = "widget", 
o.prototype.id = "privacy-info-widget", o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
network_avatar_url:M.network.get("avatar").small_url,
display_description:this.model.displayDescription(),
has_custom_application:M.network.hasCustomApp()
});
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.VideoRecordingsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/recordings/layout", o.prototype.className = "community-recordings-layout", 
o.prototype.regions = {
listRegion:"#recordings-list-region"
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.RecordingList({
collection:this.model.liveSpaceRecordings
})), M.isMightyMobileApp ? M.MobileApps.updateSecondaryHeaderText(trl("Livestream Recordings")) :void 0;
}, o.prototype._getTitleBarView = function() {
return new Mighty.Views.TitleBar({
superTitle:this.model.isNetwork() ? void 0 :this.model.getTitle(),
title:trl("Livestream Recordings")
});
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SearchFilterBar = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.additionalClasses = "search-filter-bar", o.prototype._setupTabs = function() {
var t, e, o;
return this._addTab("all"), M.currentUser.isLoggedIn() && this.model.isNetwork() && this.model.circlesOrCoursesEnabled() && this._addTab("mine"), 
("function" == typeof (t = M.network).isEnabledFeature ? t.isEnabledFeature("location") :void 0) && this._addTab("near_me"), 
this.model.isNetwork() && this.model.isEnabledFeature("circles") && this._addTab("circles"), 
this.model.isNetwork() && this.model.isEnabledFeature("courses") && this._addTab("courses"), 
("function" == typeof (e = M.network).isEnabledFeature ? e.isEnabledFeature("courses") :void 0) && this.model.isCourse() && this._addTab("coursework"), 
this.model.isOwningSpace() && this._addTab("members"), this._addTab("posts"), ("function" == typeof (o = this.model).isEnabledFeature ? o.isEnabledFeature("events") :void 0) && this._addTab("events"), 
this.model.isTopic() || this._addTab("comments"), this.model.isOwningSpace() && this.model.isEnabledFeature("topics") && this._addTab("topics"), 
this.model.isNetwork() && this.model.isEnabledFeature("segments") ? this._addTab("segments") :void 0;
}, o.prototype._addTab = function(t) {
return this.addTab(t, this.makeTabLink(t), this.collection.searchTabDisplayName(t), this.collection.searchTabDisplayName(t));
}, o.prototype.makeTabLink = function(t) {
return this.filterState.searchLink(t);
}, o;
}(Mighty.Views.BaseFilterBar);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SearchFilterLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "search-filter-layout", o.prototype.filterBarView = Mighty.CommunitiesApp.SearchFilterBar, 
o.prototype.defaultOptions = function() {
return s.extend(o.__super__.defaultOptions.apply(this, arguments), {
showListToggle:!1
});
}, o.prototype.filterBarOptions = function() {
return s.extend(o.__super__.filterBarOptions.apply(this, arguments), {
allowSpaceTab:!this.model.isNetwork(),
parentSpaceLink:function(t) {
return function() {
return M.network.searchLink(t.model.searchResults.term, t.options.searchTab);
};
}(this)
});
}, o;
}(Mighty.Views.BaseFilterLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SearchPageContainer = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.className = "community-search-container", o.prototype.showTab = function(t, e) {
var n;
if (!(this.filterState = e.filterState)) throw "filterState model required";
return o.__super__.showTab.apply(this, arguments), this.searchTab = e.searchTab, 
n = this._mapSearchTabToType(e.searchTab), this.stopListening(this.model.searchResults, "search"), 
this.model.searchResults.setSearchOptions({
term:this.filterState.getTerm(),
filters:this.filterState.getFiltersAsString()
}), this.listenTo(this.filterState, "change", function() {
return this.model.searchResults.setSearchOptions({
term:this.filterState.getTerm(),
filters:this.filterState.getFiltersAsString()
});
}), this.listenTo(this.model.searchResults, "search", this._handleCollectionSearch), 
this._handleCollectionSearch();
}, o.prototype._mapSearchTabToType = function(t) {
switch (t) {
case "all":
case "circles":
case "members":
case "posts":
case "events":
case "topics":
case "segments":
case "comments":
return t;

default:
return "all";
}
}, o.prototype.isDirty = function() {
return !1;
}, o.prototype.onRender = function() {
return r("body").addClass("search-active");
}, o.prototype.onClose = function() {
return r("body").removeClass("search-active"), this.stopListening(this.model.searchResults, "search"), 
this.model.searchResults.setSearchOptions({
term:""
});
}, o.prototype._getViewForTab = function() {
return new Mighty.CommunitiesApp.SearchPageLayout({
model:this.model,
collection:this.model.searchResults,
searchTab:this.searchTab,
filterState:this.filterState
});
}, o.prototype._handleCollectionSearch = function() {
var t;
return this.filterState.setTerm(this.model.searchResults.term), t = this.filterState.searchLink(), 
Mighty.navigate(t, {
trigger:!1,
replace:!0
}), Mighty.pageRegion.dialogPath = t;
}, o;
}(Mighty.Views.PageLayout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SearchPageLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/search/search_page_layout", 
o.prototype.className = "community-search-layout", o.prototype.regions = {
searchContentRegion:"#content-region",
filterRegion:"#filter-region"
}, o.prototype.onShow = function() {
var t;
return this._showFilters(), t = new Mighty.Views.SearchLayout({
model:this.model,
collection:this.collection
}), this.searchContentRegion.show(t);
}, o.prototype._showFilters = function() {
return this.filterRegion.show(new Mighty.CommunitiesApp.SearchFilterLayout(s.extend(this.options, {
model:this.model,
collection:this.collection
})));
}, o;
}(Mighty.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SearchSidebarFilter = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/search/sidebar_filter", o.prototype.className = "search-sidebar-filter-container", 
o.prototype.events = {
"change input#mine":"_changeMine",
"change input#location":"_changeLocation"
}, o.prototype.serializeData = function() {
return s.extend(o.__super__.serializeData.apply(this, arguments), {
show_circles:M.network.isEnabledFeature("circles") && this.model.isNetwork(),
show_location:M.network.isEnabledFeature("location") && !!this.model.get("location"),
silo_name:M.network.siloPluralName("circle")
});
}, o.prototype.onShow = function() {
return r("input#mine").prop("checked", "true" === this.collection.mine), r("input#location").prop("checked", "true" === this.collection.nearMe);
}, o.prototype._changeMine = function(t) {
return this.collection.setSearchOptions({
mine:t.target.checked
});
}, o.prototype._changeLocation = function(t) {
return this.collection.setSearchOptions({
near_me:t.target.checked
});
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.SegmentsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/segments/layout", o.prototype.className = "community-segments-layout", 
o.prototype.regions = {
listRegion:"#segments-list-region"
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.SegmentList({
collection:this.model.segments
}));
}, o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.Views.TitleBar({
title:M.network.siloPluralActualName("segment"),
enablePrimaryButton:M.network.currentUserIsHost(),
primaryButtonLink:M.URLHelper.makeLink("community_segments_settings_path"),
primaryButtonText:trl("Manage")
}), this.listenTo(this.model.silo("segment"), "change:plural_name", function() {
return this.trigger("titleBar:reShow");
}), t;
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.TopicsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/topics/layout", o.prototype.className = "community-topics-layout", 
o.prototype.regions = {
listRegion:"#topics-list-region"
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.TopicList({
collection:this.model.topics,
showFollow:!0
}));
}, o.prototype._getTitleBarView = function() {
var t;
return t = new Mighty.Views.TitleBar({
superTitle:this.model.isNetwork() ? void 0 :this.model.getTitle(),
title:trl("Topics"),
enablePrimaryButton:this.model.currentUserIsHostOrModerator(),
enableSecondaryButton:this.model.currentUserIsHostOrModerator(),
primaryButtonLink:M.URLHelper.makeLinkPerSpace("community_topics_settings_path", this.model),
primaryButtonText:trl("Manage"),
secondaryButtonLink:M.URLHelper.makeLinkPerSpace("community_new_topic_path", this.model)
}), this.model.isNetwork() || this.listenTo(this.model.getMainSilo(), "change:name", function() {
return this.trigger("titleBar:reShow");
}), t;
}, o;
}(o.Views.Layout);
});
}.call(this), function() {
var t = function(t, o) {
function n() {
this.constructor = t;
}
for (var i in o) e.call(o, i) && (t[i] = o[i]);
return n.prototype = o.prototype, t.prototype = new n(), t.__super__ = o.prototype, 
t;
}, e = {}.hasOwnProperty;
this.Mighty.module("CommunitiesApp", function(e, o, n, i, r, s) {
return e.UserSavedPostsLayout = function(e) {
function o() {
return o.__super__.constructor.apply(this, arguments);
}
return t(o, e), o.prototype.template = "communities/user_saved_posts/layout", o.prototype.className = "community-user-saved-posts-layout", 
o.prototype.regions = {
listRegion:"#saved-posts-list-region"
}, o.prototype.initialize = function() {
return this.listenTo(this.collection, "dirtyChanged", this._handleCollectionDirty);
}, o.prototype.onShow = function() {
return this.listRegion.show(new Mighty.Views.PostList({
collection:this.collection,
emptyViewText:trl("Looks like you don\u2019t have any saved posts")
}));
}, o.prototype._handleCollectionDirty = function() {
return this.collection.isDirty() ? this.collection.getNextPage(!0) :void 0;
}, o.prototype._getTitleBarView = function() {
return new Mighty.Views.TitleBar({
title:trl("Saved Posts")
});
}, o;
}(o.Views.Layout);
});
}.call(this), function(t, e) {
"use strict";
var o = "Taggle";
"function" == typeof define && define.amd ? define([], function() {
var n = e();
return t[o] = n, n;
}) :"object" == typeof module && module.exports ? module.exports = t[o] = e() :t[o] = e();
}(this, function() {
"use strict";
function t() {
for (var t = arguments[0], e = 1, o = arguments.length; o > e; e++) {
var n = arguments[e];
for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
}
return t;
}
function e(t) {
return Array.isArray ? Array.isArray(t) :"[object Array]" === Object.prototype.toString.call(t);
}
function o(t, e, o) {
t.addEventListener ? t.addEventListener(e, o, !1) :t.attachEvent ? t.attachEvent("on" + e, o) :t["on" + e] = o;
}
function n(t) {
return t.replace(/^\s+|\s+$/g, "");
}
function i(t, e) {
window.attachEvent && !window.addEventListener ? t.innerText = e :t.textContent = e;
}
var r = function() {}, s = function() {
return !0;
}, a = 8, l = 188, u = 9, p = 13, c = {
additionalTagClasses:"",
allowDuplicates:!1,
saveOnBlur:!1,
clearOnBlur:!0,
duplicateTagClass:"",
containerFocusClass:"active",
focusInputOnContainerClick:!0,
hiddenInputName:"taggles[]",
tags:[],
delimeter:",",
attachTagId:!1,
allowedTags:[],
disallowedTags:[],
maxTags:null,
tabIndex:1,
placeholder:"Enter tags...",
submitKeys:[ l, u, p ],
preserveCase:!1,
inputFormatter:r,
tagFormatter:r,
onBeforeTagAdd:r,
onTagAdd:r,
onBeforeTagRemove:s,
onTagRemove:r
}, h = function(e, o) {
this.settings = t({}, c, o), this.measurements = {
container:{
rect:null,
style:null,
padding:null
}
}, this.container = e, this.tag = {
values:[],
elements:[]
}, this.list = document.createElement("ul"), this.inputLi = document.createElement("li"), 
this.input = document.createElement("input"), this.sizer = document.createElement("div"), 
this.pasting = !1, this.placeholder = null, this.settings.placeholder && (this.placeholder = document.createElement("span")), 
"string" == typeof e && (this.container = document.getElementById(e)), this._id = 0, 
this._setMeasurements(), this._setupTextarea(), this._attachEvents();
};
return h.prototype._setMeasurements = function() {
this.measurements.container.rect = this.container.getBoundingClientRect(), this.measurements.container.style = window.getComputedStyle(this.container);
var t = this.measurements.container.style, e = parseInt(t["padding-left"] || t.paddingLeft, 10), o = parseInt(t["padding-right"] || t.paddingRight, 10), n = parseInt(t["border-left-width"] || t.borderLeftWidth, 10), i = parseInt(t["border-right-width"] || t.borderRightWidth, 10);
this.measurements.container.padding = e + o + n + i;
}, h.prototype._setupTextarea = function() {
var t;
if (this.list.className = "taggle_list", this.input.type = "text", this.input.style.paddingLeft = 0, 
this.input.style.paddingRight = 0, this.input.className = "taggle_input", this.input.tabIndex = this.settings.tabIndex, 
this.sizer.className = "taggle_sizer", this.settings.tags.length) for (var e = 0, o = this.settings.tags.length; o > e; e++) {
var n = this._createTag(this.settings.tags[e]);
this.list.appendChild(n);
}
this.placeholder && (this.placeholder.style.opacity = 0, this.placeholder.classList.add("taggle_placeholder"), 
this.container.appendChild(this.placeholder), i(this.placeholder, this.settings.placeholder), 
this.settings.tags.length || (this.placeholder.style.opacity = 1));
var r = this.settings.inputFormatter(this.input);
r && (this.input = r), this.inputLi.appendChild(this.input), this.list.appendChild(this.inputLi), 
this.container.appendChild(this.list), this.container.appendChild(this.sizer), t = window.getComputedStyle(this.input).fontSize, 
this.sizer.style.fontSize = t;
}, h.prototype._attachEvents = function() {
var t = this;
this.settings.focusInputOnContainerClick && o(this.container, "click", function() {
t.input.focus();
}), o(this.input, "focus", this._focusInput.bind(this)), o(this.input, "blur", this._blurEvent.bind(this)), 
o(this.input, "keydown", this._keydownEvents.bind(this)), o(this.input, "keyup", this._keyupEvents.bind(this));
}, h.prototype._fixInputWidth = function() {
var t, e, o, n, i;
this._setMeasurements(), this._setInputWidth(), e = this.input.getBoundingClientRect(), 
o = this.measurements.container.rect, t = ~~o.width, t || (t = ~~o.right - ~~o.left), 
n = ~~e.left - ~~o.left, i = this.measurements.container.padding, this._setInputWidth(t - n - i);
}, h.prototype._canAdd = function(t, e) {
if (!e) return !1;
var o = this.settings.maxTags;
if (null !== o && o <= this.getTagValues().length) return !1;
if (this.settings.onBeforeTagAdd(t, e) === !1) return !1;
if (!this.settings.allowDuplicates && this._hasDupes(e)) return !1;
var n = this.settings.preserveCase, i = this.settings.allowedTags;
if (i.length && !this._tagIsInArray(e, i, n)) return !1;
var r = this.settings.disallowedTags;
return r.length && this._tagIsInArray(e, r, n) ? !1 :!0;
}, h.prototype._tagIsInArray = function(t, e, o) {
if (o) return -1 !== e.indexOf(t);
var n = [].slice.apply(e).map(function(t) {
return t.toLowerCase();
});
return -1 !== n.indexOf(t);
}, h.prototype._add = function(t, e) {
var o = this, i = e || "";
"string" != typeof e && (i = n(this.input.value)), i.split(this.settings.delimeter).map(function(t) {
return o._formatTag(t);
}).forEach(function(e) {
if (o._canAdd(t, e)) {
var n = o._createTag(e), i = o.list.children, r = i[i.length - 1];
o.list.insertBefore(n, r), e = o.tag.values[o.tag.values.length - 1], o.settings.onTagAdd(t, e), 
o.input.value = "", o._fixInputWidth(), o._focusInput();
}
});
}, h.prototype._checkLastTag = function(t) {
t = t || window.event;
var e = this.container.querySelectorAll(".taggle"), o = e[e.length - 1], n = "taggle_hot", i = this.input.classList.contains("taggle_back");
"" !== this.input.value || t.keyCode !== a || i ? o.classList.contains(n) && o.classList.remove(n) :o.classList.contains(n) ? (this.input.classList.add("taggle_back"), 
this._remove(o, t), this._fixInputWidth(), this._focusInput()) :o.classList.add(n);
}, h.prototype._setInputWidth = function(t) {
this.input.style.width = (t || 10) + "px";
}, h.prototype._hasDupes = function(t) {
var e, o = this.tag.values.indexOf(t), n = this.container.querySelector(".taggle_list");
if (this.settings.duplicateTagClass) {
e = n.querySelectorAll("." + this.settings.duplicateTagClass);
for (var i = 0, r = e.length; r > i; i++) e[i].classList.remove(this.settings.duplicateTagClass);
}
return o > -1 ? (this.settings.duplicateTagClass && n.childNodes[o].classList.add(this.settings.duplicateTagClass), 
!0) :!1;
}, h.prototype._isConfirmKey = function(t) {
var e = !1;
return this.settings.submitKeys.indexOf(t) > -1 && (e = !0), e;
}, h.prototype._focusInput = function() {
this._fixInputWidth(), this.container.classList.contains(this.settings.containerFocusClass) || this.container.classList.add(this.settings.containerFocusClass), 
this.placeholder && (this.placeholder.style.opacity = 0);
}, h.prototype._blurEvent = function(t) {
if (this.container.classList.contains(this.settings.containerFocusClass) && this.container.classList.remove(this.settings.containerFocusClass), 
this.settings.saveOnBlur) {
if (t = t || window.event, this._listenForEndOfContainer(), "" !== this.input.value) return void this._confirmValidTagEvent(t);
this.tag.values.length && this._checkLastTag(t);
} else this.settings.clearOnBlur && (this.input.value = "", this._setInputWidth());
this.tag.values.length || !this.placeholder || this.input.value || (this.placeholder.style.opacity = 1);
}, h.prototype._keydownEvents = function(t) {
t = t || window.event;
var e = t.keyCode;
return this.pasting = !1, this._listenForEndOfContainer(), 86 === e && t.metaKey && (this.pasting = !0), 
this._isConfirmKey(e) && "" !== this.input.value ? void this._confirmValidTagEvent(t) :void (this.tag.values.length && this._checkLastTag(t));
}, h.prototype._keyupEvents = function(t) {
t = t || window.event, this.input.classList.remove("taggle_back"), i(this.sizer, this.input.value), 
this.pasting && "" !== this.input.value && (this._add(t), this.pasting = !1);
}, h.prototype._confirmValidTagEvent = function(t) {
t = t || window.event, t.preventDefault ? t.preventDefault() :t.returnValue = !1, 
this._add(t);
}, h.prototype._listenForEndOfContainer = function() {
var t = this.sizer.getBoundingClientRect().width, e = this.measurements.container.rect.width - this.measurements.container.padding, o = parseInt(this.sizer.style.fontSize, 10);
t + 1.5 * o > parseInt(this.input.style.width, 10) && (this.input.style.width = e + "px");
}, h.prototype._createTag = function(t) {
var e = document.createElement("li"), n = document.createElement("button"), r = document.createElement("input"), s = document.createElement("span");
t = this._formatTag(t), n.innerHTML = "&times;", n.className = "close", n.type = "button", 
o(n, "click", this._remove.bind(this, n)), i(s, t), s.className = "taggle_text", 
e.className = "taggle " + this.settings.additionalTagClasses, r.type = "hidden", 
r.value = t, r.name = this.settings.hiddenInputName, e.appendChild(s), e.appendChild(n), 
e.appendChild(r);
var a = this.settings.tagFormatter(e);
if ("undefined" != typeof a && (e = a), !(e instanceof HTMLElement) || "LI" !== e.tagName) throw new Error("tagFormatter must return an li element");
return this.settings.attachTagId && (this._id += 1, t = {
text:t,
id:this._id
}), this.tag.values.push(t), this.tag.elements.push(e), e;
}, h.prototype._remove = function(t, e) {
function o(o) {
o || (t.parentNode.removeChild(t), s.tag.elements.splice(r, 1), s.tag.values.splice(r, 1), 
s.settings.onTagRemove(e, n), s._focusInput());
}
var n, i, r, s = this;
"li" !== t.tagName.toLowerCase() && (t = t.parentNode), i = "a" === t.tagName.toLowerCase() ? t.parentNode :t, 
r = this.tag.elements.indexOf(i), n = this.tag.values[r];
var a = this.settings.onBeforeTagRemove(e, n, o);
a && o();
}, h.prototype._formatTag = function(t) {
return this.settings.preserveCase ? t :t.toLowerCase();
}, h.prototype.getTags = function() {
return {
elements:this.getTagElements(),
values:this.getTagValues()
};
}, h.prototype.getTagElements = function() {
return this.tag.elements;
}, h.prototype.getTagValues = function() {
return [].slice.apply(this.tag.values);
}, h.prototype.getInput = function() {
return this.input;
}, h.prototype.getContainer = function() {
return this.container;
}, h.prototype.add = function(t) {
var o = e(t);
if (o) for (var n = 0, i = t.length; i > n; n++) "string" == typeof t[n] && this._add(null, t[n]); else this._add(null, t);
return this;
}, h.prototype.remove = function(t, e) {
for (var o = this.tag.values.length - 1, n = !1; o > -1; ) {
var i = this.tag.values[o];
if (this.settings.attachTagId && (i = i.text), i === t && (n = !0, this._remove(this.tag.elements[o])), 
n && !e) break;
o--;
}
return this;
}, h.prototype.removeAll = function() {
for (var t = this.tag.values.length - 1; t >= 0; t--) this._remove(this.tag.elements[t]);
return this;
}, h.prototype.setOptions = function(e) {
return this.settings = t({}, this.settings, e || {}), this;
}, h;
}), Taggle.prototype._keyupEvents = function(t) {
t = t || window.event, this.input.classList.remove("taggle_back"), window.attachEvent && !window.addEventListener ? this.sizer.innerText = this.input.value :this.sizer.textContent = this.input.value, 
this.pasting && "" !== this.input.value ? (this._add(t), this.pasting = !1) :"" !== this.input.value && this.settings.submitCharacters.indexOf(this.input.value.substr(this.input.value.length - 1)) > -1 && this._add(t);
};