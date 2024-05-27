import { ReactNode, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> & {
	style?: string[];
	icon?: ReactNode;
	label?: string;
	showTextButton?: boolean;
};

export const InputField: React.FC<Props> = ({ style, icon, label, showTextButton = false, ...otherProps }) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<label>
				{label}
				<div className={style ? twMerge("inputWrapper", ...style) : "inputWrapper"}>
					{icon && <div className="inputIcon">{icon}</div>}

					<input spellCheck={false} style={{ color: "inherit", background: "inherit" }} {...otherProps} />

					{otherProps.type == "password" && (
						<div className="inputIcon" onClick={handleTogglePassword}>
							{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
						</div>
					)}
				</div>
			</label>
		</>
	);
};
