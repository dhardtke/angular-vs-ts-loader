import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub65Component} from "./stub65.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub65Component
        }])
    ],
    declarations: [
        Stub65Component
    ]
})
export class Stub65Module {

}
