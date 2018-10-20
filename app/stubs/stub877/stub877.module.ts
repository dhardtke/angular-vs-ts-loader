import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub877Component} from "./stub877.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub877Component
        }])
    ],
    declarations: [
        Stub877Component
    ]
})
export class Stub877Module {

}
