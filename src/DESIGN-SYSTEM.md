# PremVPS Design System

## 🎨 Brand Identity

### Logo
The PremVPS logo features a modern hexagonal design that represents:
- **Hexagon Shape**: Server infrastructure and networking
- **Inner 'P'**: The brand initial in bold geometric form
- **Connection Nodes**: Three blue dots representing network connectivity
- **Color Gradient**: Blue gradient from #3B82F6 to #1E40AF

### Brand Colors

#### Primary Colors
```css
Blue Primary:   #3B82F6  (rgb(59, 130, 246))
Blue Dark:      #1E40AF  (rgb(30, 64, 175))
Blue Light:     #60A5FA  (rgb(96, 165, 250))
```

#### Accent Colors (for different sections)
```css
Green:          #16A34A  (eco-friendly, reliability)
Purple:         #9333EA  (security, premium)
Orange:         #EA580C  (flexibility, control)
Pink:           #DB2777  (support, customer care)
Indigo:         #4F46E5  (infrastructure, technology)
```

#### Neutral Colors
```css
Gray 900:       #111827  (headings, dark text)
Gray 800:       #1F2937
Gray 700:       #374151  (body text)
Gray 600:       #4B5563
Gray 500:       #6B7280
Gray 400:       #9CA3AF
Gray 300:       #D1D5DB
Gray 200:       #E5E7EB
Gray 100:       #F3F4F6
Gray 50:        #F9FAFB  (backgrounds)
White:          #FFFFFF
```

## 📐 Layout

### Container Widths
```css
Max Width:      1280px (max-w-7xl)
Content Width:  1024px (max-w-5xl for text-heavy content)
Form Width:     768px (max-w-4xl for forms and CTAs)
```

### Spacing Scale
```css
xs:   4px    (gap-1)
sm:   8px    (gap-2)
md:   16px   (gap-4)
lg:   24px   (gap-6)
xl:   32px   (gap-8)
2xl:  48px   (gap-12)
3xl:  64px   (gap-16)
4xl:  96px   (gap-24)
```

### Section Padding
```css
Mobile:     py-12 (48px vertical)
Tablet:     py-16 (64px vertical)
Desktop:    py-24 (96px vertical)
```

## 🔤 Typography

### Font Family
- Primary: System font stack (San Francisco, Segoe UI, Roboto, etc.)
- Fallback: Helvetica Neue, Arial, sans-serif

### Font Sizes
```css
xs:    12px  (text-xs)
sm:    14px  (text-sm)
base:  16px  (text-base)    [DEFAULT]
lg:    18px  (text-lg)
xl:    20px  (text-xl)
2xl:   24px  (text-2xl)
3xl:   30px  (text-3xl)
4xl:   36px  (text-4xl)
5xl:   48px  (text-5xl)
6xl:   60px  (text-6xl)
```

### Font Weights
```css
Normal:     400  (font-normal)
Medium:     500  (font-medium)
Semibold:   600  (font-semibold)
Bold:       700  (font-bold)
```

### Line Heights
```css
Tight:      1.25  (leading-tight)
Normal:     1.5   (leading-normal)   [DEFAULT]
Relaxed:    1.75  (leading-relaxed)
```

### Usage Guidelines

#### Headings
```
H1: text-4xl md:text-5xl lg:text-6xl  (36-60px)
    Usage: Page titles only (one per page)
    Example: "Ultra‑Fast Cloud VPS Hosting"

H2: text-3xl md:text-4xl  (30-36px)
    Usage: Section headings, subtitles
    Example: "Why Choose PremVPS?"

H3: text-2xl  (24px)
    Usage: Subsection headings, card titles
    Example: "VPS Standard", "High Performance"

H4: text-xl  (20px)
    Usage: Minor headings, feature titles
    Example: Contact info headings
```

#### Body Text
```
Large:  text-xl  (20px) - For important paragraphs, hero subheadings
Base:   text-base (16px) - Default body text
Small:  text-sm (14px) - Secondary information, captions
Tiny:   text-xs (12px) - Labels, timestamps
```

## 🎯 Components

### Buttons

#### Primary Button
```jsx
<button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Get Started
</button>
```

#### Secondary Button
```jsx
<button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
  Learn More
</button>
```

#### Ghost Button
```jsx
<button className="px-6 py-2 text-blue-600 hover:text-blue-700 transition-colors">
  View Details →
</button>
```

#### Button Sizes
```css
Small:   px-4 py-2   (16px / 8px padding)
Medium:  px-6 py-3   (24px / 12px padding)
Large:   px-8 py-4   (32px / 16px padding)
```

### Cards

#### Basic Card
```jsx
<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
  {/* Card content */}
</div>
```

#### Gradient Card
```jsx
<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
  {/* Card content */}
</div>
```

#### Plan Card (with border)
```jsx
<div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 transition-colors">
  {/* Plan details */}
</div>
```

#### Featured Card (highlighted)
```jsx
<div className="border-2 border-blue-600 rounded-2xl p-8 relative shadow-lg">
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
    Most Popular
  </div>
  {/* Plan details */}
</div>
```

### Icons

#### Icon Container (with background)
```jsx
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

Sizes:
- Small: w-8 h-8 (icon: w-4 h-4)
- Medium: w-10 h-10 (icon: w-5 h-5)
- Large: w-12 h-12 (icon: w-6 h-6)

### Badges

#### Status Badge
```jsx
<span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
  Featured
</span>
```

#### Category Badge
```jsx
<span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
  Security
</span>
```

## 🎨 Color Usage Guide

### Page Sections

#### Hero Sections
```css
Background: bg-gradient-to-br from-blue-50 via-white to-blue-50
```

#### Content Sections (alternating)
```css
White:      bg-white
Light Gray: bg-gray-50
```

#### Call-to-Action Sections
```css
Background: bg-gradient-to-br from-blue-600 to-blue-700
Text:       text-white
Accent:     text-blue-100
```

#### Footer
```css
Background: bg-gray-900
Text:       text-gray-300
Headings:   text-white
Links:      hover:text-blue-400
```

### Benefit Cards (color coding)
Each benefit category has a unique color:
- Performance (Blue): from-blue-50, border-blue-100, bg-blue-600
- Transparency (Green): from-green-50, border-green-100, bg-green-600
- Reliability (Purple): from-purple-50, border-purple-100, bg-purple-600
- Control (Orange): from-orange-50, border-orange-100, bg-orange-600
- Support (Pink): from-pink-50, border-pink-100, bg-pink-600
- Infrastructure (Indigo): from-indigo-50, border-indigo-100, bg-indigo-600

## 🎭 Interactive States

### Hover Effects
```css
Buttons:        hover:bg-blue-700
Links:          hover:text-blue-700
Cards:          hover:shadow-lg
Borders:        hover:border-blue-500
```

### Focus States
```css
Inputs:         focus:ring-2 focus:ring-blue-500 focus:outline-none
Buttons:        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
Links:          focus:outline-none focus:ring-2
```

### Active States
```css
Active Link:    text-blue-600
Active Button:  bg-blue-700
Selected:       bg-blue-50 border-blue-600
```

### Transitions
```css
All:            transition-all duration-300
Colors:         transition-colors
Shadow:         transition-shadow
Transform:      transition-transform
```

## 📱 Responsive Design

### Breakpoints
```css
sm:   640px   (Phones landscape, small tablets)
md:   768px   (Tablets portrait)
lg:   1024px  (Tablets landscape, small desktops)
xl:   1280px  (Desktops)
2xl:  1536px  (Large desktops)
```

### Grid Patterns

#### Feature Grid
```css
Mobile:    grid-cols-1
Tablet:    md:grid-cols-2
Desktop:   lg:grid-cols-3 or lg:grid-cols-4
```

#### Content Grid
```css
Mobile:    grid-cols-1
Desktop:   lg:grid-cols-2
```

#### Plan Cards
```css
Mobile:    grid-cols-1
Tablet:    md:grid-cols-2
Desktop:   lg:grid-cols-3
```

### Mobile Adjustments
- Text sizes reduce by 1 step (text-5xl → text-4xl)
- Padding reduces (py-24 → py-16 → py-12)
- Stacked layouts (flex-col on mobile)
- Hamburger menu replaces navigation
- Full-width cards and buttons

## 🎬 Animations

### Bounce (for badges)
```jsx
<div className="animate-bounce">First Month Free!</div>
```

### Pulse (for status indicators)
```jsx
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
```

### Scale on Hover
```jsx
<button className="hover:scale-110 transition-transform">
  Click Me
</button>
```

### Typing Indicator
```jsx
{/* Three dots with staggered bounce */}
<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
     style={{ animationDelay: '0ms' }} />
<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
     style={{ animationDelay: '150ms' }} />
<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
     style={{ animationDelay: '300ms' }} />
```

## 📐 Border Radius

### Standard Radii
```css
sm:   rounded-lg    (8px)  - Small elements, badges
md:   rounded-xl    (12px) - Buttons, inputs
lg:   rounded-2xl   (16px) - Cards, sections
full: rounded-full         - Circular elements, pills
```

### Usage
- Badges: rounded-full
- Buttons: rounded-lg
- Input fields: rounded-lg
- Cards: rounded-xl or rounded-2xl
- Images: rounded-2xl

## 🔲 Shadows

### Shadow Scale
```css
sm:     shadow-sm    - Subtle elevation
default: shadow      - Standard cards
md:     shadow-md    - Raised elements
lg:     shadow-lg    - Featured cards
xl:     shadow-xl    - Modals, overlays
2xl:    shadow-2xl   - Hero images
```

### Usage
- Default cards: shadow-sm
- Hover state: shadow-lg
- Featured elements: shadow-xl
- Floating elements: shadow-2xl

## 🌈 Gradient Patterns

### Background Gradients
```css
Hero:      bg-gradient-to-br from-blue-50 via-white to-blue-50
CTA:       bg-gradient-to-br from-blue-600 to-blue-700
Eco Card:  bg-gradient-to-br from-green-50 to-white
```

### Button Gradients (optional enhancement)
```css
Primary:   bg-gradient-to-r from-blue-600 to-blue-700
Success:   bg-gradient-to-r from-green-600 to-green-700
```

## ♿ Accessibility

### Color Contrast
- Maintain WCAG AA standard (4.5:1 for normal text)
- Body text: #374151 on #FFFFFF (passes)
- Links: #2563EB on #FFFFFF (passes)
- White text on blue: #FFFFFF on #3B82F6 (passes)

### Focus Indicators
- All interactive elements have visible focus rings
- Focus ring: ring-2 ring-blue-500 ring-offset-2

### Alt Text
- All images have descriptive alt attributes
- Decorative images: alt=""
- Functional images: descriptive text

### ARIA Labels
- Icon buttons: aria-label="descriptive text"
- Navigation: proper ARIA roles
- Form inputs: associated labels

## 📏 Common Spacing Patterns

### Section Structure
```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
        Section Title
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

### Card Grid
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

### Vertical Spacing
```jsx
<div className="space-y-4">   {/* 16px between children */}
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Horizontal Spacing
```jsx
<div className="flex gap-4">   {/* 16px between children */}
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

## 🎨 Design Tokens

If implementing a design token system:

```javascript
const tokens = {
  colors: {
    brand: {
      primary: '#3B82F6',
      dark: '#1E40AF',
      light: '#60A5FA',
    },
    accent: {
      green: '#16A34A',
      purple: '#9333EA',
      orange: '#EA580C',
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
    }
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  }
};
```

---

## 📝 Usage Notes

1. **Consistency**: Use the same spacing/sizing patterns throughout
2. **Hierarchy**: Larger, bolder text for more important content
3. **White Space**: Don't be afraid of generous spacing
4. **Color Purpose**: Each color conveys meaning (blue = trust, green = success, etc.)
5. **Mobile First**: Design for mobile, enhance for desktop
6. **Accessibility**: Always maintain proper contrast and focus states

This design system ensures visual consistency across the entire PremVPS website while maintaining flexibility for future additions and modifications.
