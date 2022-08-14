import JSONLDAbstractNode from '../JSONLDAbstractNode';

class NewsArticle extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'NewsArticle',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({suggestedAnswer: details}, ...parseChildren);
  }
}

export default NewsArticle;
