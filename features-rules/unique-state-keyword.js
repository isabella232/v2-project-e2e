class KeywordUniquenessRule {
    static keywordUniqueness(feature) {
        var errors = [];
        if (feature && feature.children) {
            for (let scenario of feature.children) {
                let givenFound = false;
                let whenFound = false;
                let thenFound = false;
                for (let step of scenario.steps) {
                    if (step.keyword === 'Given ') {
                        if (givenFound) {
                            errors.push(KeywordUniquenessRule.createError(step));
                        }
                        givenFound = true;
                    }
                    if (step.keyword === 'When ') {
                        if (whenFound) {
                            errors.push(KeywordUniquenessRule.createError(step));
                        }
                        whenFound = true;
                    }
                    if (step.keyword === 'Then ') {
                        if (thenFound) {
                            errors.push(KeywordUniquenessRule.createError(step));
                        }
                        thenFound = true;
                    }
                }
            }
        }
        return errors;
    }
    static createError(step) {
        return {
            message: `Step "'${step.keyword}${step.text}'" - Duplicated keyword in scenario: ${step.keyword}`,
            rule: KeywordUniquenessRule.ruleName,
            line: step.location.line
        };
    }
}
KeywordUniquenessRule.ruleName = 'unique-given-when-then-per-scenario';
module.exports = {
    name: KeywordUniquenessRule.ruleName,
    run: KeywordUniquenessRule.keywordUniqueness
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXN0YXRlLWtleXdvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmlxdWUtc3RhdGUta2V5d29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHFCQUFxQjtJQUdsQixNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTztRQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixLQUFLLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JDLElBQUksVUFBVSxHQUFZLEtBQUssQ0FBQztnQkFDaEMsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO2dCQUMvQixJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBRS9CLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtvQkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTt3QkFDN0IsSUFBSSxVQUFVLEVBQUU7NEJBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDdEQ7d0JBQ0QsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDbkI7b0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTt3QkFDNUIsSUFBSSxTQUFTLEVBQUU7NEJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDdEQ7d0JBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDbEI7b0JBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTt3QkFDNUIsSUFBSSxTQUFTLEVBQUU7NEJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDdEQ7d0JBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDbEI7aUJBQ0Y7YUFDRjtTQUNGO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUM1QixPQUFPO1lBQ0wsT0FBTyxFQUFFLFVBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSx3Q0FBd0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRyxJQUFJLEVBQUsscUJBQXFCLENBQUMsUUFBUTtZQUN2QyxJQUFJLEVBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1NBQzVCLENBQUM7SUFDSixDQUFDOztBQTVDc0IsOEJBQVEsR0FBRyxxQ0FBcUMsQ0FBQztBQStDMUUsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO0lBQ3BDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxpQkFBaUI7Q0FDN0MsQ0FBQyJ9