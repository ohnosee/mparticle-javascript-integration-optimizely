var identityHandler = {
    onRemoveUserAttribute: function(key) {
        var attribute = {};
        attribute[key] = null;
        window['optimizely'].push({
            type: 'user',
            attributes: attribute
        });
    },
    onSetUserAttribute: function(key, value) {
        var attribute = {};
        attribute[key] = value;
        window['optimizely'].push({
            type: 'user',
            attributes: attribute
        });
    }
};

module.exports = identityHandler;
