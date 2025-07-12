import { Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";

export const CompanyInfo = () => {
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
							<Text c="dark">スプラ会社1</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								会社サイト
							</Text>
							<Text c="dark">http://aaa</Text>
						</div>
					</Stack>
				</GridCol>

				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								住所
							</Text>
							<Text c="dark">東京</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								登記電話番号
							</Text>
							<Text c="dark">03-3333-3333</Text>
						</div>
					</Stack>
				</GridCol>
			</Grid>
		</Paper>
	);
};
