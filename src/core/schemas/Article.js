import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Article extends JSONLDAbstractNode {
  getJSON(isFirstChildNode = false, schema) {
    const parseChildren = super.parseChildren();
    const details = {
      '@type': 'Article',
      ...schema
    }
    return isFirstChildNode
      ? Object.assign(details, ...parseChildren)
      : Object.assign({suggestedAnswer: details}, ...parseChildren);
  }
}

export default Article;
