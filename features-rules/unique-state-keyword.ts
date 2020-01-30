class KeywordUniquenessRule {
  public static readonly ruleName = 'unique-given-when-then-per-scenario';

  public static keywordUniqueness(feature) {
    const errors = [];
    if (feature && feature.children)
      for (const scenario of feature.children) {
        let givenFound = false;
        let whenFound = false;
        let thenFound = false;

        for (const step of scenario.steps) {
          if (step.keyword === 'Given ') {
            if (givenFound)
              errors.push(KeywordUniquenessRule.createError(step));

            givenFound = true;
          }

          if (step.keyword === 'When ') {
            if (whenFound)
              errors.push(KeywordUniquenessRule.createError(step));

            whenFound = true;
          }

          if (step.keyword === 'Then ') {
            if (thenFound)
              errors.push(KeywordUniquenessRule.createError(step));

            thenFound = true;
          }
        }
      }

    return errors;
  }

  public static createError(step) {
    return {
      message: `Step "'${step.keyword}${step.text}'" - Duplicated keyword in scenario: ${step.keyword}`,
      rule   : KeywordUniquenessRule.ruleName,
      line   : step.location.line
    };
  }
}

module.exports = {
  name: KeywordUniquenessRule.ruleName,
  run: KeywordUniquenessRule.keywordUniqueness
};
