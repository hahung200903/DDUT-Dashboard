import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider
} from '@mui/material';
import {
  Search,
  Home,
  School,
  Person,
  Science,
  AttachMoney,
  Settings,
  ExitToApp,
  TrendingUp,
  TrendingDown,
  People,
  PersonAdd,
  LibraryBooks
} from '@mui/icons-material';
import './HomePage.css';

const HomePage = () => {
  const drawerWidth = 260;
  const navigate = useNavigate();
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleLogout = () => {
    navigate('/login');
  };

  // Chart data (precomputed pixel positions matching the plotted scale)
  const chartPoints = [
    { year: 2020, value: 3080, x: 110, y: 197 },
    { year: 2021, value: 3120, x: 260, y: 186 },
    { year: 2022, value: 3200, x: 410, y: 163 },
    { year: 2023, value: 3500, x: 560, y: 77 },
    { year: 2024, value: 3650, x: 710, y: 34 },
  ];
  const pathD = chartPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`)
    .join(' ');
  const areaD = `${pathD} L 710,220 L 110,220 Z`;

  const topMenuItems = [
    { text: 'Trang chủ', icon: <Home />, active: true },
    { text: 'Tuyển sinh', icon: <PersonAdd /> },
    { text: 'Đào tạo', icon: <LibraryBooks /> },
    { text: 'Giảng viên', icon: <Person /> },
    { text: 'Nghiên cứu', icon: <Science /> },
    { text: 'Tài chính', icon: <AttachMoney /> }
  ];

  const bottomMenuItems = [
    { text: 'Cài đặt', icon: <Settings /> },
    { text: 'Đăng xuất', icon: <ExitToApp />, onClick: handleLogout }
  ];

  const stats = [
    {
      title: 'Tổng số tuyển sinh',
      value: '40,689',
      change: '8.5%',
      trend: 'up',
      icon: <People />,
      iconColor: '#3b82f6',
      iconBg: '#e8f0fe'
    },
    {
      title: 'Số sinh viên khoá mới',
      value: '10293',
      change: '1.3%',
      trend: 'up',
      icon: <School />,
      iconColor: '#fbbf24',
      iconBg: '#fff7e6'
    },
    {
      title: 'Tổng thu học phí',
      value: '$89,000',
      change: '4.3%',
      trend: 'down',
      icon: <TrendingUp />,
      iconColor: '#22c55e',
      iconBg: '#eaf7ee'
    },
    {
      title: 'Tổng số giảng viên',
      value: '2040',
      change: '1.8%',
      trend: 'up',
      icon: <Person />,
      iconColor: '#fb923c',
      iconBg: '#fff0e8'
    }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#f7f8fc',
          color: '#111827',
          borderBottom: '1px solid #eef0f4'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: '800' }}>
              <Box component="span" sx={{ color: '#3b82f6' }}>DDUT</Box>{' '}
              <Box component="span" sx={{ color: '#6b7280', fontWeight: 700 }}>Dashboard</Box>
            </Typography>
          </Box>

          <TextField
            placeholder="Search"
            size="small"
            sx={{
              width: 460,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '999px',
                height: 36,
                boxShadow: 'inset 0 0 0 1px #e5e7eb',
                '& fieldset': { border: 'none' }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              sx={{ width: 36, height: 36, backgroundColor: '#f472b6', fontSize: 12, fontWeight: 700 }}
            >
              DUT
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>DUT</Typography>
              <Typography variant="caption" sx={{ color: '#6b7280' }}>Admin</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            color: '#111827',
            borderRight: '1px solid #eef0f4'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <List sx={{ mt: 1 }}>
            {topMenuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={item.onClick}
                  sx={{
                    mx: 1.5,
                    mb: 0.5,
                    borderRadius: '10px',
                    backgroundColor: item.active ? '#e8f0fe' : 'transparent',
                    '&:hover': { backgroundColor: item.active ? '#e8f0fe' : '#f3f4f6' }
                  }}
                >
                  <ListItemIcon sx={{ color: item.active ? '#3b82f6' : '#6b7280', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      '& .MuiTypography-root': { fontSize: '14px', fontWeight: item.active ? 700 : 500, color: item.active ? '#1f2937' : '#374151' }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 'auto' }}>
            <Divider />
            <List sx={{ my: 1 }}>
              {bottomMenuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={item.onClick} sx={{ mx: 1.5, mb: 0.5, borderRadius: '10px', '&:hover': { backgroundColor: '#f3f4f6' } }}>
                    <ListItemIcon sx={{ color: '#6b7280', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ '& .MuiTypography-root': { fontSize: '14px', color: '#374151' } }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f7f8fc',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <Toolbar />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: 800, color: '#111827', fontFamily: 'Nunito Sans' }}>
          Trang chủ
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)',
                  borderRadius: '14px',
                  border: '1px solid #eef0f4'
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: '12px',
                        backgroundColor: stat.iconBg,
                        color: stat.iconColor,
                        mr: 2
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                    {stat.title}
                  </Typography>

                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#111827' }}>
                    {stat.value}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {stat.trend === 'up' ? (
                      <TrendingUp sx={{ color: '#16a34a', fontSize: 16, mr: 0.5 }} />
                    ) : (
                      <TrendingDown sx={{ color: '#ef4444', fontSize: 16, mr: 0.5 }} />
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        color: stat.trend === 'up' ? '#16a34a' : '#ef4444',
                        fontWeight: 700
                      }}
                    >
                      {stat.change}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', ml: 0.5 }}>
                      So với năm 2024
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Chart Section */}
        <Card sx={{ borderRadius: '14px', boxShadow: '0 6px 24px rgba(15, 23, 42, 0.06)', border: '1px solid #eef0f4' }}>
          <CardContent sx={{ pt: 2, px: 0, pb: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 800, color: '#111827', fontFamily: 'Nunito Sans', px: 3 }}>
              Số lượng tuyển sinh theo năm học
            </Typography>

            {/* Chart Container */}
            <Box className="chart-container" sx={{ height: 500, px: 3 }}>
              <svg
                viewBox="0 0 800 300"
                className="chart-svg"
                preserveAspectRatio="xMinYMin meet"
                onClick={() => setSelectedPoint(null)}
                onMouseLeave={() => setSelectedPoint(null)}
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                  </linearGradient>
                </defs>

                {/* Chart frame */}
                <rect x="50" y="20" width="720" height="200" fill="none" stroke="#eef0f4" strokeWidth="1" />

                {/* Horizontal grid lines (mapped roughly to 3600, 3400, 3200) */}
                <line x1="50" y1="70" x2="770" y2="70" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="50" y1="120" x2="770" y2="120" stroke="#f3f4f6" strokeWidth="1" />
                <line x1="50" y1="170" x2="770" y2="170" stroke="#f3f4f6" strokeWidth="1" />

                {/* Y-axis labels */}
                <text x="40" y="25" fontSize="12" fill="#6b7280" textAnchor="end">3700</text>
                <text x="40" y="75" fontSize="12" fill="#6b7280" textAnchor="end">3600</text>
                <text x="40" y="125" fontSize="12" fill="#6b7280" textAnchor="end">3400</text>
                <text x="40" y="175" fontSize="12" fill="#6b7280" textAnchor="end">3200</text>
                <text x="40" y="225" fontSize="12" fill="#6b7280" textAnchor="end">3000</text>

                {/* X-axis labels (years) */}
                <text x="110" y="245" fontSize="12" fill="#6b7280" textAnchor="middle">2020</text>
                <text x="260" y="245" fontSize="12" fill="#6b7280" textAnchor="middle">2021</text>
                <text x="410" y="245" fontSize="12" fill="#6b7280" textAnchor="middle">2022</text>
                <text x="560" y="245" fontSize="12" fill="#6b7280" textAnchor="middle">2023</text>
                <text x="710" y="245" fontSize="12" fill="#6b7280" textAnchor="middle">2024</text>

                {/* Data line for values: 3080, 3120, 3200, 3500, 3650 */}
                <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="3" />

                {/* Area under curve */}
                <path d={areaD} fill="url(#chartGradient)" />

                {/* Data points */}
                {chartPoints.map((p, i) => (
                  <circle
                    key={p.year}
                    cx={p.x}
                    cy={p.y}
                    r={i === chartPoints.length - 1 ? 6 : 4}
                    fill="#3b82f6"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => { e.stopPropagation(); setSelectedPoint(p); }}
                  />
                ))}

                {/* Tooltip only on click */}
                {selectedPoint && (
                  <>
                    <rect x={selectedPoint.x - 32} y={selectedPoint.y - 32} width="64" height="22" fill="#3b82f6" rx="4" />
                    <text x={selectedPoint.x} y={selectedPoint.y - 16} fontSize="12" fill="white" textAnchor="middle">
                      {selectedPoint.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </text>
                    <line x1={selectedPoint.x} y1={selectedPoint.y - 10} x2={selectedPoint.x} y2={selectedPoint.y} stroke="#3b82f6" strokeWidth="2" />
                  </>
                )}
              </svg>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;
