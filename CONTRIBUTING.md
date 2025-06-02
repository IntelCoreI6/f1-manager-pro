# Contributing to F1 Manager Pro

Thank you for your interest in contributing to F1 Manager Pro! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in the [Issues](https://github.com/IntelCoreI6/f1-manager-pro/issues)
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/device information

### Suggesting Features
1. Check existing [Issues](https://github.com/IntelCoreI6/f1-manager-pro/issues) for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Why it would be useful
   - How it might work

### Code Contributions

#### Setup Development Environment
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/f1-manager-pro.git`
3. Create a new branch: `git checkout -b feature-name`
4. Make your changes
5. Test thoroughly
6. Commit: `git commit -m "Add feature: description"`
7. Push: `git push origin feature-name`
8. Create a Pull Request

#### Code Style Guidelines
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code structure
- Ensure responsive design compatibility
- Test on multiple browsers

#### Areas for Contribution
- **Game Features**: New gameplay mechanics, teams, drivers
- **UI/UX**: Visual improvements, animations, accessibility
- **Performance**: Code optimization, loading improvements
- **Mobile**: Better mobile experience
- **Documentation**: README improvements, code comments

### Testing
- Test on Chrome, Firefox, Safari, and Edge
- Test on mobile devices
- Verify all game features work correctly
- Check save/load functionality

### Pull Request Process
1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Test thoroughly
4. Create a clear PR description
5. Link related issues

## Development Notes

### File Structure
- `index.html` - Main game interface
- `game.js` - Core game logic and state management
- `styles.css` - All styling and responsive design
- `README.md` - Project documentation
- `package.json` - Project metadata

### Key Features to Understand
- Game state management in `F1ManagerGame` class
- Tab-based navigation system
- Race simulation algorithms
- Save/load functionality using localStorage
- Responsive CSS grid layouts

## License
By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?
Feel free to open an issue for any questions about contributing!
