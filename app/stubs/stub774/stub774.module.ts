import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub774Component} from "./stub774.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub774Component
        }])
    ],
    declarations: [
        Stub774Component
    ]
})
export class Stub774Module {

}
