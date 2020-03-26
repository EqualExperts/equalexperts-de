# equalexperts-de

A website for Equal Experts Germany

## Automated Responsive Regression testing with backstopJS

I had some issues while developing the site with fixing css at one breakpoint only to discover later that the fix had broken a different breakpoint. Using BackstopJS, I developed a flow when developing new components doing automated Responsive regression testing, that goes :
> Develope component with stubbed data -> Test -> Generate 'Good' Visual Reference -> Wire up component to real data -> Test -> Commit 

The detailed steps look something like this :

1. Decide on the component to build and use higher-order components to separate business logic and render logic
2. Before building create a stubbed component in the pages/stubbedcomponent folder
3. Add the new test URL & selector to tests/backstopTests.js configuration file
4. Run 'npm run UItest' and wait, 4 tests should fail, the ones for your new component (one for each breakpoint).
5. Build out your component making sure to separate data from component and using stubbed data in isolation
6. When component is finished rerun 'npm run UItest' and make sure only your 4 new tests are failing and you haven't caused any regression in the other components, if you have fix it so that only the 4 tests fail
7. When you are happy, run 'npm run UItestGenerateReference' - this should generate 4 new UI reference images
8. ReRun 'npm run UItest', all tests should now pass.
9. Finish integrating your component with real data.
10. ReRun 'npm run UItest' and check that you didn't cause any Responsive CSS Regressions in other components at other breakpoints
11. Commit and relax and repeat. 

