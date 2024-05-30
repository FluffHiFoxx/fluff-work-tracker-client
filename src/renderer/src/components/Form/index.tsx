import { FormValidator, FormValues } from "@shared/form-models";
import { isEmpty } from "lodash";
import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	values: any;
	validator: FormValidator<any>;
	onSubmit: (values: FormValues) => {};
}

export const Form: React.FC<Props> = ({ children, values, validator, onSubmit }) => {
	const handleSubmit = () => {
		const errors = validator(values);

		if (!isEmpty(errors)) {
			onSubmit(values);
		}
	};

	return <form onSubmit={handleSubmit}>{children}</form>;
};
