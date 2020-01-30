
class KeywordOrderRule {
  public static readonly ruleName = 'given-when-then-order';

  public static keywordOrder(feature) {
    const errors = [];
    if (feature && feature.children)
      for (const scenario of feature.children) {
        let whenFound = false;
        let thenFound = false;

        for (const step of scenario.steps) {
          if (step.keyword === 'Given ')
            if (whenFound || thenFound) {
              errors.push(KeywordOrderRule.createError(step));
            }

          if (step.keyword === 'When ') {
            if (thenFound)
              errors.push(KeywordOrderRule.createError(step));

            whenFound = true;
          }

          if (step.keyword === 'Then ')
            thenFound = true;

        }
      }

    return errors;
  }

  public static createError(step) {
    return {
      message: `Step "'${step.keyword}${step.text}'"
        - Keyword used in the wrong order [Given - When -Then]: ${step.keyword}`,
      rule   : KeywordOrderRule.ruleName,
      line   : step.location.line
    };
  }
}

module.exports = {
  name: KeywordOrderRule.ruleName,
  run: KeywordOrderRule.keywordOrder
};
