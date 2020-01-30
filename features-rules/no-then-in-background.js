class ThenForbiddenInBackground {
    static thenForbidden(feature) {
        var errors = [];
        if (feature && feature.children) {
            for (let background of feature.children) {
                if (background.type !== 'Background') {
                    continue;
                }
                for (let step of background.steps) {
                    if (step.keyword === 'Then ') {
                        errors.push(ThenForbiddenInBackground.createError(step));
                    }
                }
            }
        }
        return errors;
    }
    static createError(step) {
        return {
            message: `Background "'${step.keyword}${step.text}'" - Keyword 'Then' forbidden in Background`,
            rule: ThenForbiddenInBackground.ruleName,
            line: step.location.line
        };
    }
}
ThenForbiddenInBackground.ruleName = 'no-then-in-background';
module.exports = {
    name: ThenForbiddenInBackground.ruleName,
    run: ThenForbiddenInBackground.thenForbidden
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tdGhlbi1pbi1iYWNrZ3JvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm8tdGhlbi1pbi1iYWNrZ3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0seUJBQXlCO0lBR3RCLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTztRQUNqQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixLQUFLLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZDLElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7b0JBQ3BDLFNBQVM7aUJBQ1Y7Z0JBQ0QsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsS0FBSyxFQUFFO29CQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO3dCQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUMxRDtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQzVCLE9BQU87WUFDTCxPQUFPLEVBQUUsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksNkNBQTZDO1lBQzlGLElBQUksRUFBSyx5QkFBeUIsQ0FBQyxRQUFRO1lBQzNDLElBQUksRUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7U0FDNUIsQ0FBQztJQUNKLENBQUM7O0FBMUJzQixrQ0FBUSxHQUFHLHVCQUF1QixDQUFDO0FBNkI1RCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFFLHlCQUF5QixDQUFDLFFBQVE7SUFDeEMsR0FBRyxFQUFFLHlCQUF5QixDQUFDLGFBQWE7Q0FDN0MsQ0FBQyJ9