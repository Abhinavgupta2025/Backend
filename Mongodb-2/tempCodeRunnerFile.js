 const mandatoryField = ["firstName","emailId","age"]

        const IsAllowed = mandatoryField.every((k)=> Object.keys(req.body).includes(k));

        if(!IsAllowed)
            throw new Error("Fields Missing");