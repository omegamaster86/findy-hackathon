import { Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";

export const PersonInfo = () => {
	return (
		<Paper shadow="sm" p="md" radius="md" withBorder>
			<Title
				order={3}
				c="blue"
				mb="md"
				pb="sm"
				style={{ borderBottom: "1px solid #e3f2fd" }}
			>
				キーパーソン情報
			</Title>

			<Grid>
				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								部署名
							</Text>
							<Text c="dark">情報システム</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								氏名
							</Text>
							<Text c="dark">田中</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								メールアドレス
							</Text>
							<Text c="dark">tanaka@icloud.com</Text>
						</div>
					</Stack>
				</GridCol>

				<GridCol span={6}>
					<Stack gap="md">
						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								役職
							</Text>
							<Text c="dark">部長</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								電話番号
							</Text>
							<Text c="dark">090-3333-3456</Text>
						</div>

						<div>
							<Text size="sm" c="blue" fw={500} mb={4}>
								特記事項
							</Text>
							<Text c="dark">温厚</Text>
						</div>
					</Stack>
				</GridCol>
			</Grid>
		</Paper>
	);
};
