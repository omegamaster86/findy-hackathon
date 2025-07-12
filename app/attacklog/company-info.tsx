import { Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";
import type { CompanyInfo } from "@/app/types";

interface CompanyInfoProps {
	selectedCompany?: CompanyInfo | null;
}

export const CompanyInformation = ({
	selectedCompany,
}: CompanyInfoProps) => {

	const displayCompany = selectedCompany || {
		company_name: "",
		company_website: "",
		address: "",
		registered_phone_number: "",
	};

	return (
		<Paper shadow="sm" p="md" radius="md" withBorder>
			<Title
				order={3}
				c="blue"
				mb="md"
				pb="sm"
				style={{ borderBottom: "1px solid #e3f2fd" }}
			>
				法人情報
			</Title>

			<Grid>
				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								会社名
							</Text>
							<Text c="dark">{displayCompany.company_name}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								会社サイト
							</Text>
							<Text c="dark">{displayCompany.company_website || "未設定"}</Text>
						</div>
					</Stack>
				</GridCol>

				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								住所
							</Text>
							<Text c="dark">{displayCompany.address || "未設定"}</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								登記電話番号
							</Text>
							<Text c="dark">
								{displayCompany.registered_phone_number || "未設定"}
							</Text>
						</div>
					</Stack>
				</GridCol>
			</Grid>
		</Paper>
	);
};
