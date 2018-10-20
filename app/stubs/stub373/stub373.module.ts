import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub373Component} from "./stub373.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub373Component
        }])
    ],
    declarations: [
        Stub373Component
    ]
})
export class Stub373Module {

}
