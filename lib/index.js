
/**
 * Expose ´bdoHeader´.
 */

module.exports = bdoHeader;

/**
 * BDO header
 */

function bdoHeader(){
  return {
    restrict: 'E',
    template: require('./template.html')
  };
}

